
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");
  const [textcolor, setTextColor] = useState("red");
  // darkmode bg
  const [isDarkMode, setIsDarkMode] = useState(false);
  const backgroundColor = isDarkMode ? "black" : "white";
  
  
  return (
    <div className="App-bg" style={{backgroundColor}}>
      <h3 style={{color: textcolor}}>Keyur Patel</h3>
      <div className='switch-button'>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(prevMode => !prevMode)} />
            <span className="slider round"></span>
          </label>
          <span style={{ marginLeft: "10px", color: isDarkMode ? "white" : "black" }}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>

      </div>
      <div className='button-list'>          
          <button className="btn-red" onClick={() => {setTextColor("red"); }}></button>
          <button className='btn-purple' onClick={() => {setTextColor("purple");}}></button>
          <button className='btn-green' onClick={() => {setTextColor("green");}}></button>
      </div>
    </div>
  );
}

export default App;
