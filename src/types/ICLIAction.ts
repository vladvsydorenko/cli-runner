import { ICLIParam } from "./ICLIParam";
import { ICLIConfig } from "./ICLIConfig";

export interface ICLIAction<T = any> {
    // name is/are directly mapped to action name in cli
    // e.g. name: ["workdir", "wd", "w"] will run the action if user typed any like
    // vladnets workdir | vladnets wd | vladnets w
    name: string | string[];
    // params will be mapped to those that will be passed to run function like
    // { [ICLIParam.name]: ICLIParam.type }
    params: ICLIParam[];
    // params = are final params parsed from cli arguments according to ICLIAction.params
    // config = global cli runner config
    // action = current action
    // this = current action
    run: (params: T, config: ICLIConfig, action: ICLIAction<T>) => any;
    description?: string;
}
