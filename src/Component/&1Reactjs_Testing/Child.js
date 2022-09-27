import React,{useState} from 'react'

export default function Child(props) {
  const [count, setCount]= useState(0)
  
  //  const Counter=()=>{
  //     setCount(count+1)
  //  }

  const userInfo={
    name:'Ram',
    lname:'Sharma',
    email:'ram@gmail.com',
    contact:'9876543217'
  }

  return (
    <div>
       child
       
       <hr/>
       <br/>
      {props.userData}
      <br/>
      <button onClick={()=>props.userData(userInfo)}>click me</button>
    </div>
  )
}
