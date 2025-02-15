import React from 'react'

function useCounter(){

    
        var [counter, setcounter] = React.useState(0)
        function inc(){
            setcounter(counter+1)
        }
        function dec(){
            setcounter(counter-1)
        }
        return [counter , inc, dec]
}
export default useCounter