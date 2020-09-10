import {USER_CHOICE} from "../types";

const initialState = {
  userChoice: '',
}

export const userChoiceReducer = (state= initialState, action ) => {
  switch (action.type) {
    case USER_CHOICE:
      return {
        ...state,
        userChoice: action.payload.value
      }
    default:
      return state;
  }
}

export default {
  userChoiceReducer
}