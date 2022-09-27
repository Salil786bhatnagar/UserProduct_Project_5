import React,{useState} from 'react'

export default function CurrentTime_digitalclock() {
  let cTime = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(cTime);
  
  const updateClock = ()=>{
    let updataTime = new Date().toLocaleTimeString();
    setCurrentTime(updataTime)
  }

  setInterval(updateClock);

  return (
    <div>
       CurrentTime Digital Clock
       <hr/>
       <br/>
       <h4 style={{color:'red'}}>{currentTime}</h4>
    </div>
  )
}
