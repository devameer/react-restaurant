import React from "react";

function CounterType({ img, number, type }) {
  return (
    <div className="counter-type-box">
      <img src={img} alt={type} />
      <div className="counter-info">
        <p className="counter-number">{number}+</p>
        <p className="counter-type">{type}</p>
      </div>
    </div>
  );
}

export default CounterType;
