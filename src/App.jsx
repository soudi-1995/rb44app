import logo from './logo.svg';
import './App.css';
import {useEffect, useRef} from 'react'
import Address from './address'


function App() {
  var ref1 = useRef()
  var ref2 = useRef()
  var ref3 = useRef()
  var ref4 = useRef()
  useEffect(()=>{ ref1.current.focus();
                
   },[])
  

  function Enter(e){
      if(e.key==='Enter'){
        ref2.current.focus()
      }
  }
  function Enter2(e){
    if(e.key==='Enter'){
      ref3.current.focus()
    }
  }
  
  return (
    <div>
      <h1 className='bg-success'>New to useRef</h1>
      Enter your FirstName: <input type="text" ref={ref1} onKeyUp={(e)=>{Enter(e)}} /> <br />
      <br />
      Enter your LastName: <input type="text" ref={ref2} onKeyUp={(e)=>{Enter2(e)}} />
      <br />
      <Address ref={[ref3,ref4]}></Address> <br />
      <br />
      PIN: <input type="text" ref ={ ref4}/>
    </div> 
  );
} 

export default App;
