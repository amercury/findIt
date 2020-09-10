import {ADD_DATA, CHANGE_VALUE, USER_CHOICE, DEL_DATA, ADD_DATA_SAGA} from "./types";

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: {
      value
    }
  }
}

export function addData(newData) {
  return {
    type: ADD_DATA,
    payload: {
      data: newData
    }
  }
}

export function addDataSaga(newData) {
  return {
    type: ADD_DATA_SAGA,
    payload: {
      data: newData
    }
  }
}

export function delData() {
  return {
    type: DEL_DATA
  }
}

export function setUserChoice(choice) {
  return {
    type: USER_CHOICE,
    payload: {
      userChoice: choice,
    }
  }
}