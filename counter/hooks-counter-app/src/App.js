import './App.css';
import { useState } from 'react';
function App() {
  // let counter = 15;
  let  [Counter, setCounter] = useState(0);
  const AddValue = () => {
    
    Counter = Counter + 1;
    setCounter (Counter)
    console.log("Clicked", Counter);
  };
  const RemoveValue = () =>{
    Counter = (Counter > 0 ? Counter - 1 : 0);
    setCounter (Counter);
  }
  return (
   
    <>
      <h1> Counter App</h1>
      <h2>Counter Value:  {Counter}</h2>
      <button onClick={AddValue}>Add Value </button>
      <br  /><br  />
      <button onClick={RemoveValue}>Remove Value</button>
      
    </>


  );
}

export default App;
