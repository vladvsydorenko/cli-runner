export declare const CLIHelpers: {
    isParam: (param: any) => param is import("../../types/ICLIParam").ICLIParam;
    isParamName: (value: any) => boolean;
    isParamType: (value: any) => value is import("../../types/ICLIParam").ICLIParamType;
    isAction: (action: any) => action is import("../../types/ICLIAction").ICLIAction<any>;
    isActionName: (value: any) => boolean;
    normalizeActions: (actions: any[]) => import("../../types/ICLIAction").ICLIAction<any>[];
    findConfig: (options: import("../../CLI").ICLIOptions) => {
        config: any;
        rootdir: string;
    };
};
