import React from "react"
import { Todo } from "../interface"
import './Todolist.css'
interface TodolistInterface{
    items:Todo[]
    onDeleteTodo:(id:number)=>void
    onUpdateTodo:(id:number)=>void
}
const TodoList:React.FC<TodolistInterface>=props=>{


    const renderedList= props.items.map((item,i)=>{
        return (
        <div key={i} className='list'>
            <ul >
                <h1>{item.name}</h1>
                <li>{item.description}</li>
                <div className="btns">
                      <button className="upt" onClick={()=>props.onUpdateTodo(item.id)} >Update</button>
                      <button className="del" onClick={()=>props.onDeleteTodo(item.id)}>Delete</button>
                </div>
            </ul>
        </div>
        )
    })
    return (
        <div>
          {renderedList}
        </div>
    )
}


export default TodoList