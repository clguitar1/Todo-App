import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo App
        </p>
      </header>
      <div className="content container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
