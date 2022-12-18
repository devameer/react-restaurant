import React from "react";
import Container from "../global/Container";
import GlobalLink from "../global/GlobalLink";

function JoinUs({ title, flatOff }) {
  return (
    <div className="join-us-section">
      <Container>
        <img className="join-us-img" src="/assets/joinus.png" alt="" loading="lazy" />
        <div className="join-us-content">
          <h2 className="join-us-title">{title}</h2>
          <p className="flat-off">flat {flatOff}% off</p>
          <GlobalLink>Book table</GlobalLink>
        </div>
        <img className="join-us-img" src="/assets/joinus.png" alt="" loading="lazy" />
      </Container>
    </div>
  );
}

export default JoinUs;
