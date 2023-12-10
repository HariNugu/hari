import React, { useState } from 'react'

function TodoApp2() {
    const [todo, setTodo] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [activeTodoIndex, setActiveTodoIndex] = useState(-1);
    const addTodo = (e) => {
        setTodo(e.target.value);
    };
    const addTodoData = () =>{
        if(todo !== "") {
            const data = { todo: todo };
            setTodoData([...todoData, data]);
            setTodo("");
        } else{
            alert("please enter any value in todo...");
        }
    };
    const editTodo = (e, index) => {
        setTodo(e);
        setIsEdit(true);
        setActiveTodoIndex(index);
    };
    const updatedTodoData = () =>{
        if (todo !==""){
            const updatedTodo = todoData.map((e, i) =>{
        return i === activeTodoIndex ? {todo: todo } : e;
    });
    console.log("updatedTodo", updatedTodo);
    setTodoData(updatedTodo);
    setTodo("");
    setIsEdit(false);
} else {
    alert("please enter any value in todo to update....");
}
    };
const deleteTodo = (index) =>{
    let newTodos = [...todoData];
    newTodos.splice(index, 1);
    setTodoData(newTodos);
};
const clearAllTodoData = () => {
    setTodoData([]);
};
    return (
        <center>
        <div className="App">
            <div>
                <p>this is <b>reacTech</b> todo</p>
                </div>          
                <div>
                    <input placeholder="Enter todo..." value={todo} onChange={(e) => addTodo (e)} />
                    {isEdit ? (
                        <button onClick={updatedTodoData}>update</button>
                    ) :(
                        <button onClick={addTodoData}>Add</button>
                    )}
                </div>
                <div>
                    {todoData.map((e,i) => {
                    return (
                        <div key={i}>
                            {e.todo}
                            <button onClick={() => editTodo(e.todo, i)}>edit</button>
                            <button onClick={() => deleteTodo(i)}>delete</button>
                            </div>
                    );
                    })}
                </div>
                <div>
                    <span>you have{todoData.length} Todo </span>
                    {todoData.length !== 0 && (
                      <button onClick={{clearAllTodoData}}> clear all</button>
                    )}
                </div>
        </div>
        </center>
    );
}

export default TodoApp2
