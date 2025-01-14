import React, { useEffect, useState } from 'react'

export function Clock() {
  const numbers = Array.from({ length: 60 }, (_, i) => i + 1);
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers);


  const [time, setTime] = useState(new Date())
  const [handPosition, setHandPosition] = useState({})


  useEffect(() => {
    const interval = setInterval(()=> {
      setTime(new Date())
      setShuffledNumbers(prev => shuffleArray([...numbers]))
    }, 1000)
    return () => clearInterval(interval)
  }, [numbers])
  
  // console.log(time.getHours())
  // console.log(shuffledNumbers)

  // random clock position
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
  }


  function findItemAndIndex(array, value) {
    const index = array.findIndex(item => item === value);
    const item = index !== -1 ? array[index] : undefined;
    return { item, index };
  }
  const hourPosition = findItemAndIndex(shuffledNumbers, time.getHours())
  const minutePosition = findItemAndIndex(shuffledNumbers, time.getMinutes())
  const secondPosition = findItemAndIndex(shuffledNumbers, time.getSeconds())

  // console.log(`Hours: ${hourPosition.item}, Minute: ${minutePosition.item}, Second: ${secondPosition.item}`)
  // console.log(`Hours index: ${hourPosition.index}, Minute index ${minutePosition.index}, Second index ${secondPosition.index}`)

  
  const randomClockNumbers = shuffledNumbers.map((num, index) => (
    <div 
      className="number-container"
      style={{transform: `rotateZ(${(index)*6}deg)`}}  
      key={num} 
    >
     <div className="number">{num}</div>
    </div>
  ))

  const listedOut = shuffledNumbers.map((num, index) => (
    <div key={num}>
      <div>{`number: ${num}, index: ${index}`}</div>
    </div>
  ))


  //standard clock position
  const standardClock = numbers.map((num) => (
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
      {/* <div style={{padding: "20px"}}>{`It is: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div> */}
      <div className="clock">
        <div className="dot"></div>
        {randomClockNumbers}
        <div
          className="hour-hand"
          style={{ transform: `rotateZ(${hourPosition.index * 6}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotateZ(${minutePosition.index * 6}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotateZ(${secondPosition.index * 6}deg)` }}
        ></div>
      </div>
      
      {/* <div className='list-container'>
        {listedOut}
      </div> */}
      
      {/* <div className="clock">
        <div className="dot"></div>
        {standardClock}
        <div
          className="hour-hand"
          style={{ transform: `rotateZ(${time.getHours() * 6 - 5}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotateZ(${time.getMinutes() * 6 - 5}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotateZ(${time.getSeconds() * 6 - 5}deg)` }}
        ></div>
      </div> */}
    </div>
  );
}
 
