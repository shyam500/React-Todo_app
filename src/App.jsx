import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const[todoList,setTodoList] = useState([]);

  const addTodoFunc=(todo)=>{
    setTodoList([...todoList,todo]);
  };

  return (
    <div className="App">
      <TodoList list={todoList}/>
      <AddTodo addTodo={addTodoFunc}/>
    </div>
  )
};

export default App;