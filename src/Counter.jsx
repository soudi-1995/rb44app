import React from 'react'
import useCounter from './usecounter'
function Counter(){
    var [counter, inc , dec] = useCounter()
    return(
        <div className='border m-2 p-2'>
        <h2>Counter:{counter}</h2>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
        </div>
    )
}
export default Counter 