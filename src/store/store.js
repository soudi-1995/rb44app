import { combineReducers, createStore } from "redux";
import counterReducer from './counterreducer'
var store = createStore(combineReducers({counter:counterReducer,todoReducer}))
export default store