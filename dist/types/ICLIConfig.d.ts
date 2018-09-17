import { ICLIAction } from "./ICLIAction";
export interface ICLIConfig {
    actions: ICLIAction[];
    rootdir: string;
}
