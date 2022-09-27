import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const handleClick1=()=>{
        setCount(count+1);
    }

    const handleClick2=()=>{
       if(count>0){
        setCount(count-1);
       }else{
        setCount(0);
        alert("zero value is Reached...")
       }
    } 

  return (
    <div>
      Counter Increment and Decriment
      <hr/><br/>
      <h3>{count}</h3>
      <button onClick={handleClick1}>Increment Value</button>
      <br/>
      <button onClick={handleClick2}>Decriment Value</button>
      <br/>
    </div>
  )
}
