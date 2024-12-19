import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15)
  
// let Counter = 15;

 const addValue = () => {
  // console.log("Clicked", Counter);
  if(Counter == 20){
    setCounter(Counter);
  }
  else{
    setCounter(Counter+1);
  }
  
}

let removeValue = () =>{
  if(Counter == 0){
    setCounter(Counter);
  }else{
  setCounter(Counter-1);
  }
}

  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {Counter }</h2>

     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button
     onClick={removeValue}
     >remove value</button>
    </>
  )
}

export default App
