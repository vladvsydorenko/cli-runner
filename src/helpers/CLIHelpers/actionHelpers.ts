import { isParam, isParamName } from "./paramHelpers";
import { ICLIAction } from "../../types/ICLIAction";

export const isActionName = isParamName;
export const isAction = (action: ICLIAction | any): action is ICLIAction => {
    let isNameValid = isActionName((<ICLIAction>action).name);
    if (!isNameValid && Array.isArray((<ICLIAction>action).name)) isNameValid = (<string[]>action.name).every(isActionName);

    let areParamsValid = Array.isArray((<ICLIAction>action).params);
    if (areParamsValid) areParamsValid = (<ICLIAction>action).params.every(isParam);

    let isRunValid = typeof (<ICLIAction>action).run === "function";
    let isDescriptionValid = !(<Object>action).hasOwnProperty("description") || typeof (<ICLIAction>action).description === "string";

    return isNameValid && areParamsValid && isRunValid && isDescriptionValid;
};

export const normalizeActions = (actions: (ICLIAction | any)[]) => {
    return actions.filter(isAction);
};
