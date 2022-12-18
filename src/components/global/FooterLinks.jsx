import React from "react";
import Li from "./Li";
import UL from "./UL";

function FooterLinks({ title }) {
  return (
    <div className="footer-links">
      <h3 className="footer-links-title">{title}</h3>
      <UL ulClass="footer-links-list">
        <Li className="footer-li" href="/#" text="Privacy Policy" />
        <Li className="footer-li" href="/#" text="Terms & conditions" />
        <Li className="footer-li" href="/#" text="Blogs" />
        <Li className="footer-li" href="/#" text="our team" />
        <Li className="footer-li" href="/#" text="Our kitchen" />
      </UL>
    </div>
  );
}

export default FooterLinks;
