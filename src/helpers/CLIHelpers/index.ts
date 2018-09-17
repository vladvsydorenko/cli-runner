import { isParam, isParamName, isParamType } from "./paramHelpers";
import { isAction, isActionName, normalizeActions } from "./actionHelpers";
import { findConfig } from "./configHelpers";

export const CLIHelpers = {
    isParam,
    isParamName,
    isParamType,

    isAction,
    isActionName,
    normalizeActions,

    findConfig,
};
