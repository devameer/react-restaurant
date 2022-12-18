import React from "react";
import Container from "../global/Container";
import CounterType from "../global/CounterType";

function Counter() {
  return (
    <div className="counter-section">
      <Container>
        <div className="counter-box">
          <CounterType
            img="/assets/counter1.png"
            number="250"
            type="Delicacy"
          />
          <CounterType
            img="/assets/counter2.png"
            number="100"
            type="renowned chefs"
          />
          <CounterType
            img="/assets/counter3.png"
            number="30"
            type="Members"
          />
        </div>
      </Container>
    </div>
  );
}

export default Counter;
