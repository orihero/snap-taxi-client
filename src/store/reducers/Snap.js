const initialState = {
    data: {},
    currentGroup: {}
};

const Snap = (state = initialState, action) => {
    switch (action.type) {
        case 'Hey': {
            let data = '';
            return {
                ...state,
                data
            }
        }
        default: {
            return state
        }
    }
};

export default Snap
