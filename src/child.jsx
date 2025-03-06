import React , {useContext} from "react";
import Grandchild from "./grandchild";
import mycontext from "./my context";


function Child(props){
    var un = useContext(mycontext)
    
    return (
        <div className="border border-3 m-3 p-3">
            <h2>Child: {props.x} <h3>{un.name}</h3></h2>
            <button onClick={()=>{un.abc()}}>click</button>
            <Grandchild x={props.x}></Grandchild>
        </div>
    )
}
export default Child