import React from "react";
import Logo from "./Logo";

function FooterLogo({ logotitle, logoInfo }) {
  return (
    <div className="footer-logo">
      <a href="/#" className="footer-logo-box">
        <Logo imgSrc="/assets/logo.png" imgAlt="Logo" />
        <h2 className="logo-title">{logotitle}</h2>
      </a>
      <p className="footer-logo-info">{logoInfo}</p>
      <div className="social-links-box">
        <a href="/#" className="social-icon-link">
          <img  src="/assets/SocialIcons1.png" alt="Social Icon" loading="lazy" />
        </a>
        <a href="/#" className="social-icon-link">
          <img  src="/assets/SocialIcons2.png" alt="Social Icon" loading="lazy" />
        </a>
        <a href="/#" className="social-icon-link">
          <img  src="/assets/SocialIcons3.png" alt="Social Icon" loading="lazy" />
        </a>
      </div>
    </div>
  );
}

export default FooterLogo;
