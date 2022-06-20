import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setState]=useState(0);
  // const [val,setVal]=useState(true);
  const btn={
    height:"40px",
    width:"100px",
    margin:"10px",
    background:"blue",
    color:"white",
  }
  const countHandler=(arg)=>{
    if(arg==="+"){
    setCount(preCount=>count+1);
    setCount(preCount=>count+1);
    }
    else{
      setState(count-1);
    }
  } 

  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={()=>countHandler("+")} style={btn}>Increament</button>
      <button onClick={()=>countHandler("-")} style={btn}>Decreament</button>
      {/* <h3>{val.toString()}</h3>
      <button onClick={()=>setVal(!val)}>Toggle</button> */}
      
    </div>
  );
}

export default App;
