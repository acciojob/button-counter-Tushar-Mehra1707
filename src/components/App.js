
import React from "react";
import './../styles/App.css';

const App=()=>{
  const[num,setNum]=React.useState(0);
  return(
    <div>
    <p>{num}</p>
  <button onclick={()=>{
    setNum{num+1}
  }}>
  increment
  </button>
  </div>
)
}
export default App
