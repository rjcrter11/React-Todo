import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";
const todos = [
  {
    task: "Practice React",
    id: 1234933,
    completed: false
  },
  {
    task: "Eat lunch",
    id: 2389423879634,
    completed: false
  },
  {
    task: "Clean the kitchen",
    id: 9328458,
    completed: false
  }
];

class App extends React.Component {
  todoData;
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  addTodo = (todoName) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      task: todoName
    };
    localStorage.setItem("newTodo", JSON.stringify(newTodo));

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });

    localStorage.getItem("newTodo", newTodo);
  };

  toggleTodo = (id) => {
    const newList = this.state.todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newList
    });
  };

  delTodo = () => {
    const filteredTodo = this.state.todoList.filter((todo) => !todo.completed);

    this.setState({
      todoList: filteredTodo
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <div className="header">
          <h3>Todo List: </h3>
        </div>
        <TodoList
          todos={this.state.todoList}
          toggleTodo={this.toggleTodo}
          delTodo={this.delTodo}
        />
        <TodoForm className="todo-form" addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
