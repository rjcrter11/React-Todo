import React from "react";
import "./Todo.css";
const Todo = (props) => {
  return (
    <div
      onClick={() => props.toggleTodo(props.item.id)}
      // style={{ textDecoration: props.item.completed ? "line-through" : "none" }}
      className={`item${props.item.completed ? " completed " : " "}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
