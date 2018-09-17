import { ICLIAction } from "./ICLIAction";

export interface ICLIConfig {
    // all loaded actions
    actions: ICLIAction[];
    // root directory, as usually it's a dirname of the config file
    rootdir: string;
}
