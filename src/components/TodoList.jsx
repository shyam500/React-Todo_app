import classes from "./TodoList.module.css";
import bin from "E:/projects/Todo_app/icons/bin.png";

const TodoList = (props) => {
  const { list, delTodoFunc } = props;

  const deleteHandler = (e) => {
    const delItem = e.target.parentElement.textContent.slice(0, -1);
    delTodoFunc(delItem);
  };

  const todos = list.map((todo) => (
    <li key={todo}>
      {todo} <img onClick={deleteHandler} src={bin} alt="delete Button" />
    </li>
  ));

  return list.length > 0 ? (
    <ul className={classes.listContainer}>{todos}</ul>
  ) : (
    <h2>No Todos found....</h2>
  );
  
};

export default TodoList;
