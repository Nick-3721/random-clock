import React from 'react'

const ClockFace = ({ num, rotation }) => {
  return (
    <div 
      className="number-container"
      style={{transform: `rotateZ(${rotation}deg)`}}  
    >
     <div className="number">{num}</div>
    </div>
  )
}

export default ClockFace
