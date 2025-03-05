import React, { useContext } from "react";
import mycontext from "./my context";
function Grandchild(props){
    var usr = useContext(mycontext)
    return (
        <div className="border border-4 m-4 p-4">
            <h3>GrandChild:{props.x} <h5>{usr}</h5></h3>
        </div>
    )
}
export default Grandchild 