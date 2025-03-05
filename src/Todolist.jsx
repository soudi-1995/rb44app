import React, {useReducer} from "react";

function todoReducer(state,action){
    console.log(state,action)
    if(action.type==='ADDTODO'){
        return {todos:[...state.todos,action.payload]}
    }
    if(action.type==='DEL'){
        state.todos.splice(action.payload,1)
        return {todos:[...state.todos]}
    }
   
}
function Todolist(){

   var [state,dispatch] = useReducer(todoReducer , {todos:['something','nothing']})
   var [newtodo, setnewtodo] = React.useState('')
    return (
        <div>
            <h2>Todo-List</h2>
            <input type="text" onChange={(e)=>{setnewtodo(e.target.value)}} />
            <button onClick={()=>{dispatch({type:'ADDTODO',payload:newtodo})}}>Add ToDo</button>
            <ul>
                {
                    state.todos.map((todo,index)=>{
                        return <li>{todo}
                        <button onClick={()=>{dispatch({type:'DEL',payload:index})}}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist 