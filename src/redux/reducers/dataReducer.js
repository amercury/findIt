import {ADD_DATA, DEL_DATA} from "../types";
import {userChoiceReducer} from "./userChoiceReducer";

const initialState = {
  data: []
}

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload.data
      }
    case DEL_DATA:
      return {
        ...state,
        data: []
      }
    default:
      return state;
  }
}

export default {
  dataReducer
}