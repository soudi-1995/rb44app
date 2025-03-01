import React from "react";
import { connect } from "react-redux";

function Todolist(props){
    var [ntd,setNTD] = React.useState('')
    return(
        <div>
            <h2>Todolist</h2>
            <input type="text" onChange={(e)=>{setNTD(e.target.value)}} /> 
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:ntd})}}>ADD TODO</button>
            <ul>
                {
                    props.todoReducer.todos.map((todo,i)=>{
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
            </div>
    )
}
export default connect(store=>store)(Todolist) 