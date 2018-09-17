import * as fs from "fs";
import * as path from "path";
import { nativeRequire } from "../nativeRequire";
import { FSHelpers } from "../FSHelpers";
import { logger } from "../logger";
import { ICLIOptions } from "../../CLI";
import { isAction } from "./actionHelpers";
import { ICLIAction } from "../../types/ICLIAction";

export const findConfig = (options: ICLIOptions) => {
    const { configFilename, workdir, configRootKey } = options;

    const configFilepath = FSHelpers.findPathUpSync(configFilename, workdir);
    const rootdir = path.dirname(configFilepath);

    let configFileContent;
    let config;

    try {
        configFileContent = fs.readFileSync(configFilepath).toString();
        config = JSON.parse(configFileContent);
    }
    catch (error) {
        logger.error("Error occurred during the config file reading:");
        logger.error(error.message);
        logger.error("Stack: \n", error.stack);
    }

    config = configRootKey ? config[configRootKey] : config;

    try {

        config.actions = (<string[]>config.actions)
            .reduce<{ [key: string]: ICLIAction }>((acc, moduleName) => {

                if (moduleName.charAt(0) === ".") {
                    moduleName = path.join(rootdir, moduleName);
                }
                // native require is node.js require (require is webpack replacement, not node.js' one)
                const actions = nativeRequire(moduleName).actions;
                const filteredActions = actions.filter(isAction);

                console.log(actions, filteredActions);

                (<ICLIAction[]>filteredActions).forEach(action => {
                    const names = Array.isArray(action.name) ? action.name : [action.name];
                    names.forEach(name => {
                        acc[name] = action;
                    });
                });

                return acc;
            }, {});

    }
    catch (error) {
        logger.error("Error occurred during modules loading from config.actions:");
        logger.error(error.message);
        logger.error("Stack: \n", error.stack);
    }

    return {
        config,
        rootdir,
    };
};
