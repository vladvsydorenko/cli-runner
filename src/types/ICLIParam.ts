export enum ECLIParamType {
    string = "string",
    number = "number",
    boolean = "boolean",
}

export interface ICLIParamType {
    type: ECLIParamType | ECLIParamType[],
    isArray: boolean;
}

export interface ICLIParam {
    name: string | string[];
    type: ICLIParamType | ICLIParamType[];
    // user provided description
    description?: string;
}
