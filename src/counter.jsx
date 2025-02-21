import React from "react";
import {connect} from 'react-redux'
function Counter(props){
    console.log(props)
    return (
        <div> <h1>Counter:{props.counter.count} </h1>
        <button onClick={()=>{props.dispatch({type:'INC'})}}>Inc</button>
        <button onClick={()=>{props.dispatch({type:'DEC'})}}>Dec</button>
        </div>
    )
}
export default  connect(function(store){return store})(Counter) 
