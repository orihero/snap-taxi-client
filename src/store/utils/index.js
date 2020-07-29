export const createActionTypes = (actionType) => ({
    REQUEST: `${actionType}_REQUEST`,
    SUCCESS: `${actionType}_SUCCESS`,
    FAILURE: `${actionType}_FAILURE`,
});

export const createAction = (actionType) => (
    values,
    cb = (data) => {
    },
    errorCb = (error) => {
    }
) => ({type: actionType, payload: values, cb, errorCb});

