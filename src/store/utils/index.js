export const toFormData = data => {
    let form = new FormData();
    Object.keys(data).forEach(key => {
        if (Array.isArray(data[key])) {
            let obj = data[key];
            for (let index in obj) {
                form.append(`${key}[${index}]`, obj[index]);
            }
            return;
        }
        if (typeof data[key] === "object") {
            let obj = data[key];
            let i = 0;
            Object.keys(obj).forEach((id, index) => {
                if (obj[id]) form.append(`${key}[${i++}]`, parseInt(id));
            });
            return;
        }
        form.append(key, data[key]);
    });
    return form;
};


const createActionTypes = (actionType) => ({
    REQUEST: `${actionType}_REQUEST`,
    SUCCESS: `${actionType}_SUCCESS`,
    FAILURE: `${actionType}_FAILURE`,
});

export const createAction = (actionType) => {
    const actionTypes = createActionTypes(actionType);
    return {
        ...actionTypes,
        request: (payload, successCallback=()=>{}, errorCallback=()=>{}) => ({
            type: actionTypes.REQUEST,
            payload,
            successCallback,
            errorCallback
        }),
        success: (payload) => {
            return {
                type: actionTypes.SUCCESS,
                payload: payload,
            }
        },
        failure: (payload) => {
            return {
                type: actionTypes.SUCCESS,
                payload: payload,
            }
        },
    }
};

