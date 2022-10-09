import React, { useState } from "react";
import "./App.css";

const App = () => {
 const [todo,setTodo]=useState("");
 const [todos,setTodos]=useState([]);
 const [editId,setEditId]=useState(0)
 const handleSubmit=(e)=>{
  e.preventDefault();
  if(editId){
    const editTodo=todos.find((i)=>i.id === editId);
    const updatedTodo=todos.map((t)=>
    t.id === editTodo.id
    ?(t={id: t.id , todo}):({id:t.id,todo:t.todo})
    )
    setTodos(updatedTodo);
    setEditId(0);
    setTodo(" ");
    return;
  }
  if(todo !== ' '){
    setTodos([{id:`${todo}-${Date.now()}`, todo}, ...todos]);
    setTodo(" ");
  }
  // ... => spread operator
 }
 const handleDelete=(id)=>{
  const delTodo=todos.filter((to)=>to.id !== id);
  setTodos([...delTodo]);
 }
 const handleEdit=(id)=>{
  const editTodo=todos.find((i)=>i.id === id);
  setTodo(editTodo.todo);
  setEditId(id);
 }
  return (
    <div className="container">
      <div className="box">
        <h1>Todo List App</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <button type="submit">{editId ? "Edit" : "Click Me"}</button>
        </form>
        <ul className="all-todos">
          {todos.map((t)=>{
            return <li className="single-todo">
            <span className="todo-text" key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)}>Edit</button>
            <button onClick={()=>handleDelete(t.id)}>Delete</button>
           </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
