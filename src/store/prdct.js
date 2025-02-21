const initialState = {
    prdct : fetch('https://fakestoreapi.com/products')
           .then(res=>(res).json())
           .then(data=>[...data])    
   
}
var productReducer = function (state=initialState, action){

        return state
}
export default productReducer 