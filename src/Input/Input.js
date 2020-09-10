import React from 'react';
import styles from './Input.module.css'
import {connect, useDispatch, useSelector} from "react-redux";
import {changeValue} from "../redux/actions";

const Input = (props) => {
  const {placeholder, type = 'text'} = props;
  const dispatch = useDispatch();
  const value = useSelector(state => state.value);

  function onChangeValue(newValue) {
    dispatch(changeValue(newValue));
  }

  return (
    <div className={styles.Input}>
      <input type={type}
             placeholder={placeholder}
             onChange={(event) => onChangeValue(event.target.value)}
      />
    </div>
  )

}

export default Input;