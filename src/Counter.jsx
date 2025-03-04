import React from 'react'
import useCounter from './useCounter'
function Counter(){
 var  [counter , inc, dec, rst] = useCounter()

    return(
        <div className='border m-2 p-2'>
        <h2>Counter:{counter}</h2>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
        <button onClick={()=>{rst() }}>Reset</button>
        </div>
    )
}
export default Counter 