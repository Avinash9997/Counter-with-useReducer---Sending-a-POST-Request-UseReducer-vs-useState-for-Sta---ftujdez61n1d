import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,0 );

const handleIncrement = () => {
  dispatch({ type: "INCREMENT" });
};

const handleDecrement = () => {
  dispatch({ type: "DECREMENT" });
};

  return (
    <div id="main">
      <button id="increment-btn" onClick={handleIncrement}>
        Increment
      </button>
      <span id="counter">{state}</span>
      <button id="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  )
}


export default App;
