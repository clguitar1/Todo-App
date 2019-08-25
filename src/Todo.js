import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      todo: this.props.todo
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleDelete() {
    this.props.deleteTodo(this.props.id);
    console.log('handleDelete clicked!');
  }
  toggleForm() {
    console.log("toggleForm!");
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    // take new todo data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.todo);
    this.setState({ isEditing: false });
  }
  handleChange(e) {
    // change state when editing
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.todo} name="todo" onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <li className="Todo collection-item">
          <div>
            {this.props.todo}
            <a href="#!" onClick={this.handleDelete} className="secondary-content">
              <i className="material-icons">delete</i>
            </a>
            <a href="#!" onClick={this.toggleForm} className="secondary-content">
              <i className="material-icons">edit</i>
            </a>
          </div>

        </li>
      );
    }
    return result;
  }
}

export default Todo;