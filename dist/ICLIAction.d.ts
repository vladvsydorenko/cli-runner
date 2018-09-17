import { ICLIParam } from "./ICLIParam";
import { ICLIConfig } from "./ICLIConfig";
export interface ICLIAction<T = any> {
    name: string | string[];
    params: ICLIParam[];
    run: (params: T, config: ICLIConfig, action: ICLIAction<T>) => any;
    description?: string;
}
