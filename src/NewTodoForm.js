import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "", validation: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.validation === "You must enter a todo!") {
      this.setState({ validation: "" })
    }
    if (this.state.todo !== "") {
      const newTodo = { ...this.state, id: uuid(), completed: false };
      this.props.addTodo(newTodo);
      this.setState({ todo: "" })
    } else {
      this.setState({ validation: "You must enter a todo!" })
    }
  }
  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <div className="NewTodoForm-input">
            <label htmlFor="newTodo">New Todo</label>
            <input
              type="text"
              id="newTodo"
              name="todo"
              value={this.state.todo}
              onChange={this.handleChange}
            />
            <p style={{ color: "red" }}>{this.state.validation}</p>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;