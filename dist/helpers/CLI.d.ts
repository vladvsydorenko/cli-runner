export interface ICLIOptions {
    configFilename?: string;
    configDirname?: string;
}
export interface ICLIConfig {
    actions: string[];
    rootdir: string;
}
export declare class CLI {
    config: ICLIConfig;
    constructor(options?: ICLIOptions);
    static defaultOptions: ICLIOptions;
    static findConfig(configFilename?: string, workdir?: string): any;
}
