import React from "react";
import styles from './List.module.css';

const List = (props) => {
  let result = null;

  if (props.list.length > 0) {
    result = props.list.map((el) => {
      return (
        <div key={el.id}>
        <span id={el.id}>
          {el.name}
        </span>
          <br />
        </div>
      )
    })
  }

  return (
    <div className={styles.List}
         onClick={(e) => props.selectHandler(e)}>
      {result}
    </div>
  )
}



export default List;