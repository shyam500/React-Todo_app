import { useState, forwardRef } from "react";
import "./AddTodo.css";

const AddTodo = (props) => {
  const [todo, setTodo] = useState("");
  const { addTodo } = props;
  const [visible, setVisible] = useState(false);

  const changeVisibilityHandler = () => {
    setVisible(true);
  };

  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setVisible(false);
    addTodo(todo);
  };

  const blurHandler =()=>{
    setVisible(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {!visible && (
        <button type="button" onClick={changeVisibilityHandler}>
          <span>+</span> Add Todo
        </button>
      )}

      {visible && (
        <input
          type="text"
          placeholder="Enter Todo..."
          onChange={todoHandler}
          onBlur={blurHandler}
        ></input>
      )}
    </form>
  );
};

export default AddTodo;
