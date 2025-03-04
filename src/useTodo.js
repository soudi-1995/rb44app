import React from "react";
function useTodo(){
    var [todos,settodo] = React.useState([])
    function addTodo(newtodo){
        settodo((prev)=>{
            return [...prev,newtodo]
        })
    }
    function delTodo(index){
        settodo((prev)=>{
            prev.splice(index,1)
            return [...prev]
        })
    }
    return [todos, addTodo, delTodo]
}
export default useTodo


