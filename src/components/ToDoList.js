import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import './ToDoList.css'

export default class ToDoList extends React.Component {
    
    state = {
        todos: [],
        todoToShow: 'all'
    };
    
    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

    toggleComplete = (id) => {
        this.setState ({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }else {
                    return todo;
                }
            })
        });
    };

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    removeAllTodosThatAreComplete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };
    
    render () {
        let todos = [];

        if(this.state.todoToShow === "all") {
            todos = this.state.todos;
        } else if(this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if(this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }

        return (
            <>
                <div className="todo-container">
                    <h1 className="todo-title">ToDo</h1>
                    <div className="todo-items-container">
                        <ToDoForm onSubmit={this.addTodo}/>
                        {todos.map(todo => 
                        (<ToDo key={todo.id} 
                            toggleComplete={() => this.toggleComplete(todo.id)} 
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo}/>
                        ))}
                        <div className="todo-left">ToDos Left: 
                            {this.state.todos.filter(todo => !todo.complete).length}
                        </div>
                        <div>
                            <button className="todo-button" onClick={() => this.updateTodoToShow("all")}>All</button>
                            <button className="todo-button" onClick={() => this.updateTodoToShow("active")}>Active Items</button>
                            <button className="todo-button" onClick={() => this.updateTodoToShow("complete")}>Completed Items</button>
                        </div>
                        {this.state.todos.some(todo => todo.complete) ? (
                            <div>
                                <button className="todo-button" onClick={this.removeAllTodosThatAreComplete}>
                                    Remove All Completed Items 
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </>
        );
    }
}