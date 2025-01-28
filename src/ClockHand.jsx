import React from "react";

const ClockHand = ({ handType, rotation }) => {
  return (
    <div
      className={`${handType}-hand`}
      style={{ transform: `rotateZ(${rotation}deg)` }}
    ></div>
  );
};

export default ClockHand;
