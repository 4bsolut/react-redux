import logo from './logo.svg';
import './App.css';
import React from "react";
import AddTodo from './components/AddTodo.js'
function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      
    </div> 
  );
}

export default App;

