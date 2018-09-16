import { ICLIAction, ICLIActionParam } from "../ICLIAction";

const isParam = (param: any): param is ICLIActionParam => {
    return (
        typeof param.name === "string" &&
        typeof param.type === "number"
    );
};

export const normalizeActions = (actions: any) => {
    if (Array.isArray(actions)) {
        actions = actions.filter((action: ICLIAction) => {
            const areParamsValid = action.params.every(isParam);

            if (!areParamsValid) {
                console.warn(``);
            }
        });
    }
}