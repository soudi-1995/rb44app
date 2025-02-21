import { combineReducers, createStore } from "redux";
import counterReducer from './counterreducer'
import productReducer from "./prdct"; 
var store = createStore(combineReducers({counter:counterReducer,productReducer}))
export default store  