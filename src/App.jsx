import { useState } from 'react';
import './App.css'
import Button from './components/Buttons';

function App() {
  let [color, setColor] = useState("");
  return (
    <div className={`the-page ${color}`}>
      <div id='presentation-card'>
        <h1>Color Genrator</h1>
        <h3>Click to change the background color-</h3>
        <div id='button-container'>
          <button className='btn red' onClick={() => setColor("red")}>red</button>
          <button className='btn blue' onClick={() => setColor("blue")}>blue</button>
          <button className='btn orange' onClick={() => setColor("orange")}>orange</button>
        </div>

      </div>

    </div>
  );
};

export default App;
