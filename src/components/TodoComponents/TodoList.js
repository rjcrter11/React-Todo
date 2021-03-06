// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {props.todos.map((item) => (
        <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
      ))}
      <button onClick={props.delTodo} className="clear-btn">
        Clear Finished Tasks
      </button>
    </div>
  );
};
export default TodoList;
