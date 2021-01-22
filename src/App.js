import React,{ useState } from 'react';
import Counter from './Counter.js'
import './App.css';

function App() {
 let [count, setCount] = useState(1);
 let [isMorning, setMorning] = useState(false);
  return (
    <div className={`Evening ${isMorning ? 'Morning' : ''}`}>
        <Counter counter = {count}/>
        <button
          onClick={ ()=> setCount(++count)}
        >Counter Update</button>

        <h1>Good  {isMorning ? 'Morning !' : 'Evening !'}</h1>
        <button
         onClick={ ()=> setMorning(!isMorning)}
        >Set Day</button>
    </div>
  );
}

export default App;
