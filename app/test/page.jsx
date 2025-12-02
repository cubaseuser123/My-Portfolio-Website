'use client'
import React from 'react'
import { useState } from 'react';
const Test = () => {
  const [count, setcount] = useState(0);
  const Increment = ()=>{
    setcount(count+1);
  }

  const Decrement = ()=>{
    setcount(count-1);
  }
  console.log(count);

  function counterTime(){
    
      setInterval(Increment,500);
      //const newcount = count+1;
      //setcount(newcount);
  }
  return (
    <div>
      <button onClick={counterTime}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Test;
