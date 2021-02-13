import React from "react";

export default props => (
    <div className="todo-item">
        <div className="todo-text"
            style={{
                textDecoration: props.todo.complete ? "line-through" : ""
            }}
            onClick={props.toggleComplete}>{props.todo.text}
        </div>
        <i className="fa fa-times close-todo" onClick={props.onDelete}></i>
    </div>
);