import React from "react";
import useLocalStorageState from './localstoragecounter'

function useTodo(){
    var [todos,settodo] =  useLocalStorageState(['a','b'])
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