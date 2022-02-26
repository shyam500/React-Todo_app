import { useRef } from "react";
import "./TodoList.css";

const TodoList = (props) => {
  const listRef = useRef();
  const { list } = props;

  const deleteHandler = (e) => {
    //    const delItem =  e.target.parentElement.textContent.slice(0,-1);
    const delItem = listRef.current
     console.log(delItem);
  };

  const todos = list.map((todo) => (
    <li key={todo} ref={listRef}>
      {todo} <span onClick={deleteHandler}>X</span>
    </li>
  ));

  return <ul>{todos}</ul>;
};

export default TodoList;
