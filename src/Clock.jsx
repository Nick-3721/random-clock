import React, { useEffect, useState } from 'react'




export function Clock() {
  const numbers = Array.from({ length: 60 }, (_, i) => i + 1);

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(()=> {
      setTime(new Date())
    }, 1000)
  }, [])

  // console.log(time.getHours())

  const clockNumber = numbers.map((num) => (
    <div 
      className="number-container"
      style={{transform: `rotateZ(${num*6-5}deg)`}}  
      key={num} 
    >
     <div className="number">{num}</div>
    </div>
  ))


  return (
    <div className="wrapper">

    <div className='clock'>
      <div className="dot"></div>
        {clockNumber}
        <div 
          className="hour-hand"
          style={{transform: `rotateZ(${time.getHours() * 6-5}deg)`}} 
          ></div>
        <div 
          className="minute-hand"
          style={{transform: `rotateZ(${time.getMinutes() * 6-5}deg)`}} 
          ></div>
        <div 
          className="second-hand"
          style={{transform: `rotateZ(${time.getSeconds() * 6-5}deg)`}} 
          ></div>
      </div>
    </div>
  );
}
 