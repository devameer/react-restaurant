import React from "react";
import NavBar from "../global/NavBar";
import Container from "../global/Container";
import GlobalLink from "../global/GlobalLink";

function Greeting({ className }) {
  return (
    <div className={className}>
      <div className="layout"></div>
      <Container>
        <div className="main-section-content">
          <NavBar />
          <div className="main-text-content">
            <h1 className="main-title">
              Welcome To <br /> Golden View Dine
            </h1>
            <p className="greeting-text">
              Explore the authentic vegan dishes with your friends and family
            </p>
            <GlobalLink>Read more</GlobalLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Greeting;
