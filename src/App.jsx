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
    console.log(todoList);
    localStorage.setItem("todoArr", JSON.stringify([...todoList]));
  };

  const deleteTodoHandler = (delTodo) => {
    setTodoList((prev) => {
      localStorage.setItem("todoArr", JSON.stringify([...prev.filter((a) => a !== delTodo)]));
      prev.filter((a) => a !== delTodo);
    });
    
  };

  return (
    <div className="App">
      <TodoList list={todoList} delTodoFunc={deleteTodoHandler} />
      <AddTodo addTodo={addTodoFunc} />
    </div>
  );
}

export default App;
