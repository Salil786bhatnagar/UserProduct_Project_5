import React,{useState} from 'react'

export default function InputUpdateValue() {
  const userName = <h3 style={{color:'red'}}>ram</h3>;
  const [getValue, setValue] = useState(userName);
  const [calue, setCValue] = useState();
  
  const handelClick=()=>{
    setValue(calue)
  }


  return (
    <div>
       InputUpdateValue
       <hr/>
       <br/>
     <h4 style={{color:'green'}}>{getValue}</h4>
       <input type='text' placeholder='enter the name' onChange={(e)=>setCValue(e.target.value)}/>
       <br/><br/>
       <button onClick={handelClick}>Submit</button>
       
     </div>
  )
}
