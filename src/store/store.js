import {createStore, combineReducers} from 'redux'
import counterReducer from './reducers/counterreducer'
import todoReducer from './reducers/todolistreducer'
var store = createStore(combineReducers({counterReducer,todoReducer}))
export default store;
