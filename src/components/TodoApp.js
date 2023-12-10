import React, { Component } from "react";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      isEdit: false,
      todoData: [],
      activeTodoIndex: -1
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      todo: e.target.value
    });
  };
  addTodos = () => {
    if (this.state.todo !== "") {
      const data = { todo: this.state.todo };
      this.setState({
        todoData: [...this.state.todoData, data],
        todo: ""
      });
    }
  };
  editTodo = (e, i) => {
    this.setState({
      isEdit: true,
      todo: e.todo,
      activeTodoIndex: i
    });
  };
  updateTodo = (e) => {
    if (this.state.todo !== "") {
      const updatedTodo = this.state.todoData.map((todo, i) => {
        return i === this.state.activeTodoIndex ?
           { todo: this.state.todo } : todo;
      });
      this.setState({
        todoData: updatedTodo,
        todo: "",
        isEdit: false
      });
    }
  };
  deleteTodo = (index) => {
    let newTodos = [...this.state.todoData];
    newTodos.splice(index, 1);
    this.setState({
      todoData: newTodos
    });
  };
  clearAllTodo = () => {
    this.setState({
      todoData: []
    });
  };
  render() {
    return (
      <center>
      <div>
        <p>  Todo App by <b>reacTech</b></p>
        <input
          value={this.state.todo}
          placeholder="type your todo...."
          onChange={(e) => this.onChangeHandler(e)} />
        {this.state.isEdit ? (
          <button onClick={this.updateTodo}>update</button>
        ) : (
          <button onClick={this.addTodos}>Add</button>
        )}

        <div>
          {this.state.todoData.map((e, i) => {
            return (
              <div key={i}>
                <span>{e.todo}</span>
                <button
                  onClick={() => {
                    this.editTodo(e, i);
                  }}
                >
                  edit
                </button>
                <button onClick={() => this.deleteTodo(i)}>delete</button>
              </div>
            );
          })}
        </div>
        <div>
          <span>you have {this.state.todoData.length} todos </span>
          {this.state.todoData.length !== 0 && (
            <button onClick={this.clearAllTodo}>clear all</button>
          )}
        </div>
      </div>
      </center>
    );
  }
}

export default TodoApp;

