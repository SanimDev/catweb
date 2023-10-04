import { FETCH_CATS, REMOVE_CATS_BY_ID, UPLOAD_CATS } from "../actions/actionTypes";
const initializedState = {
  json: null,
  
};



const catReducer = (state = initializedState, actionTypes) => {
  const { type, payload } = actionTypes;
  switch (type) {
    case FETCH_CATS:
      return {
        ...state,
        json: payload,
      };

    case UPLOAD_CATS:
      return {
        ...state,
        json: actionTypes.payload
      };

    case REMOVE_CATS_BY_ID:
      return {
        ...state,
        json: actionTypes.payload
        };
    default:
      return state;
  }
};
export default catReducer

