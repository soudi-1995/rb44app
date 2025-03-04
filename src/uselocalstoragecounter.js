import React, { useState } from "react";
function useLocalStorageState(inv){
    var [state, setstate] = useState(window.localStorage.getItem('count' || inv))
    function updatestate(newvalue){
        window.localStorage.setItem('count' , newvalue)
        setstate(newvalue)
    }
    return [state,updatestate]
}
export default useLocalStorageState 