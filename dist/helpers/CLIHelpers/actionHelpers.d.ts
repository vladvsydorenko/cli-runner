import { ICLIAction } from "../../types/ICLIAction";
export declare const isActionName: (value: any) => boolean;
export declare const isAction: (action: any) => action is ICLIAction<any>;
export declare const normalizeActions: (actions: any[]) => ICLIAction<any>[];
