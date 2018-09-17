import { ICLIParam, ICLIParamType } from "../../types/ICLIParam";
export declare const isParam: (param: any) => param is ICLIParam;
export declare const isParamName: (value: any) => boolean;
export declare const isParamType: (value: any) => value is ICLIParamType;
