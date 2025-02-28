const initialState = {
    todos:['t1','t2', 't3']
}
function todoReducer(state=initialState, action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    return state
}
export default todoReducer 