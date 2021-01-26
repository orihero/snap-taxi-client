import { GetRegions, SetRegionId } from '../constants/regions';

const initialState = {
  data: [],
  id: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GetRegions.SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case SetRegionId.SUCCESS:
      return {
        ...state,
        id: action.payload,
      };
    case 'LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
};
