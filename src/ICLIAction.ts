export enum ICLIParamType {
    string,
    number,
    boolean
}

export interface ICLIActionParam {
    name: string[];
    type: ICLIParamType[];
}

export interface ICLIAction<T = any> {
    params: ICLIActionParam[];
    run: (options: T) => any;
}
