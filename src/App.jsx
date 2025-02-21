
import React from 'react'
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from "./counter"
import Products from "./displayproducts" 


function App() {
  return (
    <Provider store={store} >
      <div>
      <h1>Application</h1>
      <Counter></Counter>
      <Products></Products>
      </div>
    </Provider>
   
  );
}

export default App;
