import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <button className="todo-btn" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}
export default TodoForm;
