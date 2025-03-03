import React from "react";
function useTodo(){
    var [todos,settodo] = React.useState(['a','b'])

    function addTodo(newtodo){
        settodo((prv)=>{
            return [...prv, newtodo]
        })
    }
    function delTodo(index){
        settodo((prv)=>{
            prv.splice( index, 1)
            return [...prv]
        })
    }
    return [todos, addTodo, delTodo]
}
export default useTodo