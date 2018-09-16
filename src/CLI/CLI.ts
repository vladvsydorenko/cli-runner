import * as fs from "fs";
import * as path from "path";
import { FSHelpers } from "../helpers/FSHelpers";
import { ICLIAction } from "../ICLIAction";
import nativeRequire from "../helpers/nativeRequire";

export interface ICLIOptions {
    configFilename?: string;
    configDirname?: string;
}

export interface ICLIConfig {
    actions: { [id: string]: ICLIAction; };
    rootdir: string;
}

export class CLI {

    public config: ICLIConfig;

    constructor(options: ICLIOptions = {}) {

        options = Object.assign({}, CLI.defaultOptions, options);

        this.config = CLI.findConfig(options.configFilename, options.configDirname);

    }

    // -----------------------------------------------------------------------------
    // Static
    public static defaultOptions: ICLIOptions = {
        configFilename: "vladnets.json",
        configDirname: process.cwd(),
    };

    public static findConfig(
        configFilename = this.defaultOptions.configFilename,
        workdir = process.cwd()
    ) {
        const filename = FSHelpers.findPathUpSync(configFilename, workdir);
        if (!filename) return;

        const content = fs.readFileSync(filename).toString();
        let userConfig;

        try {
            userConfig = JSON.parse(content);
        }
        catch (err) {
            console.error("Error occured during config parsing", err.message);
        }


        const config = Object.assign({
            rootdir: path.dirname(filename),
        }, userConfig);

        // normalize roodir if it was set in config file
        config.rootdir = path.normalize(config.rootdir);

        config.actions = (<string[]>config.actions).reduce((acc, modulePath) => {
            // relative path
            if (modulePath.charAt(0) === ".") {
                modulePath = path.join((<ICLIConfig>config).rootdir, modulePath);
            }
            // // if not absolute path then it's node.js module resolving
            // else if(modulePath.charAt(0) !== "/" || modulePath.charAt(0) !== "\\") {

            // }

            try {
                const moduleResult = nativeRequire(modulePath);
                let actions = moduleResult.actions;
                if (Array.isArray(actions)) {
                    actions = actions.filter((action: ICLIAction) => {
                        return action.params
                    });
                }
            }
            catch (err) {
                console.error(`Error during action loading by "${modulePath}"\n`, err.stack);
            }

            return acc;
        }, {});

        return config;
    }

}
