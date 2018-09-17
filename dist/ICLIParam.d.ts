export declare enum ECLIParamType {
    string = 0,
    number = 1,
    boolean = 2
}
export interface ICLIParamType {
    type: ECLIParamType | ECLIParamType[];
    isArray: boolean;
}
export interface ICLIParam {
    name: string | string[];
    type: ICLIParamType | ICLIParamType[];
    description?: string;
}
