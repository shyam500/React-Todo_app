import { useEffect, useState } from "react";
import classes from "./App.module.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  useEffect(() => {
    if (localStorage.getItem("todoArr")) {
      setTodoList(JSON.parse(localStorage.getItem("todoArr")));
    }
  }, []);

  const [todoList, setTodoList] = useState(
    localStorage.getItem("todoArr")
      ? JSON.parse(localStorage.getItem("todoArr"))
      : []
  );

  const addTodoFunc = (todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todoArr", JSON.stringify([...todoList]));
  }, [todoList]);

  const deleteTodoHandler = (delTodo) => {
    setTodoList((prev) => {
      const delArr = prev.filter((a) => a !== delTodo);
      localStorage.setItem("todoArr", JSON.stringify(delArr));
      return delArr;
    });
  };

  return (
    <div className={classes.App}>
      <TodoList list={todoList} delTodoFunc={deleteTodoHandler} />
      <AddTodo addTodo={addTodoFunc} />
    </div>
  );
}

export default App;
