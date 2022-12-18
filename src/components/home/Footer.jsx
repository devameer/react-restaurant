import React from "react";
import Container from "../global/Container";
import FooterLinks from "../global/FooterLinks";
import FooterLogo from "../global/FooterLogo";
import FooterSubscribe from "../global/FooterSubscribe";

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <Container>
          <div className="footer">
            <FooterLogo
              logotitle="Golden View Dine "
              logoInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
            />
            <FooterLinks title="Other Links" />
            <div className="footer-contact">
              <h3 className="contact-footer-title">Contact Us</h3>
              <div className="contact-type-footer">
                <img src="/assets/email.png" alt="email Icon" loading="lazy" />
                <a
                  href="Gogreendineservice@gmail.com"
                  className="mailto-footer"
                >
                  Gogreendineservice@gmail.com
                </a>
              </div>
              <div className="contact-type-footer">
                <img src="/assets/location.png" alt="location Icon" loading="lazy" />
                <p className="footer-location">
                  AZ complex bylane3 Mandari Rd Mumbai 1100867
                </p>
              </div>
              <div className="contact-type-footer">
                <img src="/assets/phone.png" alt="phone Icon"  loading="lazy"/>
                <a href="+1800 287 256" className="phone-footer">
                  +1800 287 256
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <FooterSubscribe
        img="/assets/Subscribe.png"
        to="our Newsletter"
      />
      <div className="copy-right-footer">
        <Container>
          <div className="copy-right-box">
            <p>Copyright © 2022 Golden Dine website</p>
            <p>All rights reserved</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
