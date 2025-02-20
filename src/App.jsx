import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react'
import Address from './address'


function App() {
  var ref1 = useRef()
  var ref2 = useRef()
  useEffect(()=>{ ref1.current.focus();
                
   },[])
  

  function Enter(e){
      if(e.key==='Enter'){
        ref2.current.focus()
      }
  }
  return (
    <div>
      <h1 className='bg-success'>New to useRef</h1>
      Enter your FirstName: <input type="text" ref={ref1} onKeyUp={(e)=>{Enter(e)}} />
      Enter your LastName: <input type="text" ref={ref2} />
      <Address></Address>
    </div> 
  );
} 

export default App;
