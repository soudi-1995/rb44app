import React from "react";
import { connect } from "react-redux";
function Counter(props){
   
    return (

        <div><h2>Counter: {props.counterReducer.count}</h2>
        <button className='btn btn-success' onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button>
        <button className='btn btn-danger' onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button>
        <button className="btn btn-info" onClick={()=>{props.dispatch({type:'RST'})}}>Reset</button>

        </div>
    )
}
export default connect(function(store){return store})(Counter)