import { forwardRef } from "react";

var Address = forwardRef((props, refs)=>{
    function Enter3(e){
        if(e.key==='Enter'){
          refs[1].current.focus()
        }
      }
    return (
        <div style={{border:'2px solid gray ' , margin:'5px' , padding:'10px'}}>
            <br />
          
           Address: <input type="text" onKeyUp={(e)=>{Enter3(e)}} ref ={refs[0]}/>
        </div>
    )})

export default Address;