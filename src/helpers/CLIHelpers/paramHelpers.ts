import { ICLIParam, ICLIParamType } from "../../types/ICLIParam";

export const isParam = (param: ICLIParam | any): param is ICLIParam => {
    const name = (<ICLIParam>param).name;
    const type = (<ICLIParam>param).type;
    const description = (<ICLIParam>param).description;

    let isNameValid = isParamName(name);
    if (!isNameValid && Array.isArray(name)) isNameValid = name.every(isParamName);

    let isTypeValid = isParamType(type);
    if (!isTypeValid && Array.isArray(type)) isTypeValid = type.every(isParamType);

    return (isNameValid && isTypeValid);
};

export const isParamName = (value: any) => typeof value === "string";

export const isParamType = (value: ICLIParamType | any): value is ICLIParamType =>
    typeof value.type === "number" && typeof value.isArray === "boolean";
