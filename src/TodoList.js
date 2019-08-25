import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addTodo(todo) {
    this.setState(state => ({
      todos: [...state.todos, todo]
    }));
  }
  deleteTodo(id) {
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    })
  }
  update(id, updatedTodo) {
    console.log('update!!');
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo: updatedTodo }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    console.log('update!!');
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todoList = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        deleteTodo={this.deleteTodo}
        updateTodo={this.update}
        completed={todo.completed}
        todo={todo.todo}
        toggleTodo={this.toggleCompletion}
      />
    ))
    return (
      <div className="TodoList row">
        <h1 className="center">Todo List</h1>
        <ul className="collection">
          {todoList}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;