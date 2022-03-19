import { useState} from "react";
import classes from "./AddTodo.module.css";

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
    <form onSubmit={formSubmitHandler} className={classes.form}>
      {!visible && (
        <button type="button" onClick={changeVisibilityHandler}>
           Add Todo
        </button>
      )}

      {visible && (
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={todoHandler}
          onBlur={blurHandler}
        ></input>
      )}
    </form>
  );
};

export default AddTodo;
