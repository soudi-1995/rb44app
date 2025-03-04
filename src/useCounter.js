import React from 'react'
import useLocalStorageState from './localstoragecounter'
function useCounter(){
var  [counter , setCounter] =  useLocalStorageState()
    function inc(){
        setCounter(counter+1)
    }
    function dec(){
        setCounter(counter-1)
    }
    function rst(){
        setCounter(0)
    }
    return [counter, inc, dec, rst]
}
export default useCounter