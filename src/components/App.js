
import React from "react";
import './../styles/App.css';

cont App=()=>{
  const[count,setcount]=usestate(0)

  const onAdd = ()=>{
    setCount(count+1)
  }
        {/* Do not remove the main div */}
  
  return (
    <div >
    <p>Button clicked {count} times</p>
    <button onClick={onAdd}>Click me</button>
    </div>
  )
}
export default App
