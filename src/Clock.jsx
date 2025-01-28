import React, { useEffect, useState } from 'react'
import ClockHand from './ClockHand';
import ClockFace from './ClockFace'

export function Clock() {
  const numbers = Array.from({ length: 60 }, (_, i) => i + 1);
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers);
  const [time, setTime] = useState(new Date())


  useEffect(() => {
    const interval = setInterval(()=> {
      setTime(new Date())
      setShuffledNumbers(prev => shuffleArray([...numbers]))
    }, 1000)
    return () => clearInterval(interval)
  }, [numbers])
  
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


  const randomClockNumbers = shuffledNumbers.map((num, index) => (
    <ClockFace num={num} rotation={index*6} key={num} />
  ))

  const standardClock = numbers.map((num) => (
    <ClockFace num={num} rotation={num*6-5} key={num} />
  ))

  return (
    <div className="wrapper">
      {/* <div style={{padding: "20px"}}>{`It is: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div> */}
      <div className="clock">
        <div className="dot"></div>
        {randomClockNumbers}
        <ClockHand 
          handType={"hour"}
          rotation={hourPosition.index * 6}
        />
        <ClockHand 
          handType={"minute"}
          rotation={minutePosition.index * 6}
        />
        <ClockHand 
          handType={"second"}
          rotation={secondPosition.index * 6}
        />
      </div>
      
    {/* NORMAL CLOCK */}
      
      {/* <div className="clock">
        <div className="dot"></div>
        {standardClock}
        <ClockHand 
          handType={"hour"}
          rotation={time.getHours() * 6 - 5}
        />
        <ClockHand 
          handType={"minute"}
          rotation={time.getMinutes() * 6 - 5}
        />
        <ClockHand 
          handType={"second"}
          rotation={time.getSeconds() * 6 - 5}
        />
      </div> */}
    </div>
  );
}
 
