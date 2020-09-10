import {takeLatest, put, call, delay} from 'redux-saga/effects'
import {ADD_DATA_SAGA} from "../types";
import {addData} from "../actions";

export function* sagaWatcher() {
  yield takeLatest(ADD_DATA_SAGA, sagaWorker);
}

function* sagaWorker(action) {
  yield delay(300);
  const payload = yield call(fetchData, action.payload.data);
  yield put(addData(payload));
}

async function fetchData(value) {
  try {
      const req = await fetch(`https://api.savetime.net/v1/client/suggest/item?q=${value}`);
      const res = await req.json();
      const result = [];
      for (let i = 0; i < 3; i++) {
        result.push(res.items[i]);
      }
      return result;
  } catch (err) {
      return new Error(err)
  }
}