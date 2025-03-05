import React from "react";
import Child from "./child";

function Parent() {
    var x= 'ammananna'
    return (
        <div className="border border-2 m-2 p-2">
            <h2 >Parent: <h3>{x}</h3></h2>
            <Child x={x}></Child>
        </div>
    )
}
export default Parent  