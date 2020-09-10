import {CHANGE_VALUE} from "../types";

const initialState = {
  value: '',
}

export const valueReducer = (state= initialState, action ) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        value: action.payload.value
      }
    default:
      return state;
  }
}

export default {
  valueReducer
}