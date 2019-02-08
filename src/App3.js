import React, {useState} from 'react';
import Form from './Form';

import './App.css';

export default () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = (i) => {
    todos.map((todo, k) => k===i ? {
      ...todo,
      complete: !todo.complete
    } : todo)
  }
  
  return(
    <div className="App" style={{textAlign: "center"}}>
      <Form onSubmit={text => setTodos([{text, complete: false}, ...todos])}/>
      <div>
        {
          todos.map(({text, complete}, i) => (
            <div key={text} onClick={() => toggleComplete(i)}
              style={{ textDecoration: complete ? 'line-through' : ''}}
            >
              {text}
            </div>
          ))
        }
      </div>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
}