import "./TodoList.css";

const TodoList = (props) => {
  const { list, delTodoFunc } = props;

  const deleteHandler = (e) => {
    const delItem = e.target.parentElement.textContent.slice(0, -2);
    delTodoFunc(delItem);
  };

  const todos = list.map((todo) => (
    <li key={todo}>
      {todo} <span onClick={deleteHandler}>X</span>
    </li>
  ));

  return <ul>{todos}</ul>;
};

export default TodoList;