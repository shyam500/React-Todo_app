import "./TodoList.css";
import bin from 'E:/projects/Todo_app/icons/bin.png';

const TodoList = (props) => {
  const { list, delTodoFunc } = props;

  const deleteHandler = (e) => {
    const delItem = e.target.parentElement.textContent.slice(0,-1);
    delTodoFunc(delItem);
  };

  const todos = list.map((todo) => (
    <li key={todo}>
      {todo} <img onClick={deleteHandler}  src={bin} alt="delete Button" />
    </li>
  ));

  return <ul>{todos}</ul>;
};

export default TodoList;