import React from 'react'
function useCounter(){
var  [counter , setCounter] = React.useState(0)
    function inc(){
        setCounter(counter+1)
    }
    function dec(){
        setCounter(counter-1)
    }
    return [counter, inc, dec]
}
export default useCounter