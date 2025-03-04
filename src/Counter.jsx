import React, {useState} from "react";
import useLocalStorageState from "./uselocalstoragecounter";

function Counter(){
    var [counter, setcounter] = useLocalStorageState(0)

    function inc(){
        setcounter(counter+1)
    }
    function dec(){
        setcounter(counter-1)
    }
    function rst(){
        setcounter(0)
    }
    return(
        <div className="border border-2 m-2 p-3">
            <h2>Counter: {counter} </h2>
            <button onClick={()=>inc()}>INC</button>
            <button onClick={()=>dec()}>DEC</button>
            <button onClick={()=>rst()}>RST</button>
        </div>
    )
}
export default Counter