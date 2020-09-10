import React, {useEffect} from 'react';
import './App.css';
import Input from "../Input/Input";
import List from "../List/List";
import {useDispatch, useSelector} from "react-redux";
import {addDataSaga, delData, setUserChoice} from '../redux/actions'

function App() {
  const value = useSelector(state => state.value.value);
  const data = useSelector(state => state.data.data);
  const dispatch = useDispatch();

  function selectHandler(event) {
    dispatch(setUserChoice(event.target.innerText));
  }

  useEffect(() => {
    if (value.length > 2) {
      dispatch(addDataSaga(value));
    } else {
      dispatch(delData());
    }
    }, [value])

  return (
    <div className="App">
      <Input
        placeholder="Поиск по магазину"
      />
      {data.length > 0 ? <List list={data} selectHandler={(e) => selectHandler(e)}/> : null}
    </div>
  );
}


export default App;
