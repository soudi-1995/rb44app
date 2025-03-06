import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import mycontext  from './my context';
import { useState } from 'react';


function App() {
  var [userdetails,setuser] = useState({
    name:'siri',
    gender:'robo',
    age: 20,
    abc: function (){
      alert('eyy idi context api')
      this.name = 'sri'
      console.log(this)
    setuser({...userdetails,name:'sri'})
    }
  }
  )
  return (
    <mycontext.Provider value={userdetails}>
    <div>
      <h1 className='bg-success'>ParentChild</h1>
      <h2>hello</h2>
      <Parent></Parent>
     
    </div>
    </mycontext.Provider>
  );
}

export default App;
