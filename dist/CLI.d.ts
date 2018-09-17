export interface ICLIOptions {
    configFilename?: string;
    configRootKey?: string;
    rootdir?: string;
    workdir?: string;
}
export declare class CLI {
    private config;
    constructor(options?: ICLIOptions);
}
