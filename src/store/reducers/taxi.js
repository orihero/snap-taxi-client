const initialState = {
    isFetched: false,
    waiting: false,
    data: {},
};

const taxi = (state = initialState, action) => {
    switch (action.type) {
        case "s": {
            return {
                ...state,
                data: [],
                isFetched: true,
            }
        }
        default:
            return state
    }
};

export default taxi
