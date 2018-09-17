import * as path from "path";
import { ICLIConfig } from "./types/ICLIConfig";
import { findConfig } from "./helpers/CLIHelpers/configHelpers";
import { logger } from "./helpers/logger";

export interface ICLIOptions {
    configFilename?: string;
    configRootKey?: string;
    rootdir?: string;
    workdir?: string;
}

const defaultCLIOptions: ICLIOptions = {
    configFilename: "configs.json",
    configRootKey: "vladnets",
    rootdir: process.cwd(),
    workdir: process.cwd(),
};

export class CLI {

    private config: ICLIConfig;

    constructor(options: ICLIOptions = {}) {
        options = Object.assign({}, defaultCLIOptions, options);

        options.rootdir = path.normalize(options.rootdir);
        options.workdir = path.normalize(options.workdir);

        const result = findConfig(options);

        logger.ok("result", result.config);
    }
}
