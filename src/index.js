import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import createSagaMiddleware from 'redux-saga'
import {compose, createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {valueReducer} from "./redux/reducers/valueReducer";
import {dataReducer} from './redux/reducers/dataReducer'
import {Provider} from 'react-redux';
import {sagaWatcher} from "./redux/sagas/sagas";
import {userChoiceReducer} from "./redux/reducers/userChoiceReducer";

const saga = createSagaMiddleware();

const store = createStore(
  combineReducers({
    value: valueReducer,
    data: dataReducer,
    userChoice: userChoiceReducer
  }),
  composeWithDevTools(compose(applyMiddleware(saga))));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
