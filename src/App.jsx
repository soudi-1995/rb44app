import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import mycontext from './my context';

function App() {
  return (
    <mycontext.Provider value={'ram'}>
    <div>
      <h1 className='bg-success'>ParentChild</h1>
      <h2>hello</h2>
      <Parent></Parent>
     
    </div>
    </mycontext.Provider>
  );
}

export default App;
