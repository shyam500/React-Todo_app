import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todoArr")) {
      setTodoList(JSON.parse(localStorage.getItem("todoArr")));
    }
  }, []);

  const addTodoFunc = (todo) => {
    setTodoList([...todoList, todo]);
    localStorage.setItem("todoArr", JSON.stringify([...todoList]));
  };

  const deleteTodoHandler = (delTodo) => {
    setTodoList((prev) => {
      const delArr = prev.filter((a) => a !== delTodo);
      localStorage.setItem("todoArr", JSON.stringify(delArr));
      return delArr;
    });
  };

  return (
    <div className="App">
      <TodoList list={todoList} delTodoFunc={deleteTodoHandler}/>
      <AddTodo addTodo={addTodoFunc} />
    </div>
  );
}

export default App;
