import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15;

  const addValue = () => {
    // console.log("Value added", Math.random());
    
    // counter = counter + 1;

    if(counter < 20 ){
    setCounter(counter => counter + 1);
    console.log("Counter : ", counter);
    } else{
      alert('Maximum value reached');
    }
    
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter => counter - 1);
    } else{
      alert('Minimum value reached');
    }
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value : {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
