import React from 'react'
import Child from './Child'
export default function $1Parent() {

  const showData=(userInfo)=>{
  document.getElementById('demo').innerHTML = "User Name:-"+userInfo.name+"<br/> User Last Name"+userInfo.lname

//document.write("User Name:-"+userInfo.name+"<br/> User Last Name"+userInfo.lname)
  }

// const showData=(Counter)=>{
//   document.getElementById('demo').innerHTML = Counter();
//   }

  return (
    <div>
        Parent
        <hr/>
        <h6></h6>
        <p id="demo" style={{color:'green'}}></p>
       
        <br/>
      <h3><Child userData={showData}/></h3>
    </div>
  )
}
