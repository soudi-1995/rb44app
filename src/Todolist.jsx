import React, { useState } from "react";
import useTodo from "./usetodo";
import useLocalStorageState from './localstoragecounter'

function Todolist(){
    var [todos, addTodo, delTodo] = useTodo()
    var [newtodo, setnewtodo] =  useLocalStorageState('')
    console.log(todos)

    return (
        <div className="border border-1 m-2 p-3 ">
            <h2>ToDo-List</h2>
            <input type="text" onChange={(e)=>setnewtodo(e.target.value)} />
            <button onClick={()=>addTodo(newtodo)}>Add-Todo</button>
            <ul>
                {
                    todos.map((todo,index)=>{
                        return <li>{todo} 
                        <button onClick={()=>delTodo(index)}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist