import React, { useContext } from "react";
import mycontext from "./my context";
function Grandchild(props){
   // var usr = useContext(mycontext)    this is contextprovider
    return (
        <mycontext.Consumer>
            {
                (usr)=>{            //this is context Consumer
                    return(
                        <div className="border border-4 m-4 p-4">
            <h3>GrandChild:{props.x} <h5>{usr.age}</h5></h3>
        </div>
                    )
                }
            }
        </mycontext.Consumer>
   )
}
export default Grandchild 