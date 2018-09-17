import { ICLIAction } from "../ICLIAction";
import { ICLIParam, ICLIParamType } from "../ICLIParam";
export declare namespace CLIHelpers {
    const isParam: (param: any) => param is ICLIParam;
    const isParamName: (value: any) => boolean;
    const isParamType: (value: any) => value is ICLIParamType;
    const isActionName: (value: any) => boolean;
    const isAction: (action: any) => action is ICLIAction<any>;
    const normalizeActions: (actions: any[]) => ICLIAction<any>[];
}
