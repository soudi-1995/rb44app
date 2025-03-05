import React, { useReducer } from 'react'

function reducer(state,action){
    if(action.type==='INC'){
        return {counter:state.counter+1}
    }
    if(action.type==='DEC'){
        return {counter:state.counter-1}
    }
    if(action.type==='RST'){
        return {counter:0}
    }
    return 
}
function Counter(){
    var [state,dispatch]=useReducer(reducer ,{counter:0})
 

    return(
        <div className='border m-2 p-2'>
        <h2>Counter:{state.counter}</h2>
        <button onClick={()=>{dispatch({type:'INC'})}} >Increment</button>
        <button onClick={()=>{dispatch({type:'DEC'})}} >Decrement</button>
        <button onClick={()=>{dispatch({type:'RST'})}} >RESET</button>
        </div>
    )
}
export default Counter 