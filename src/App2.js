import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return(
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>completed</button>
        <button onClick={() => deleteTodo(index)}>X</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'task1',
      isCompleted: false
    },
    {
      text: 'task2',
      isCompleted: false
    },
    {
      text: 'task3',
      isCompleted: true
    },
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted:false }];
    setTodos(newTodos);
    console.log(todos)
  }
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;