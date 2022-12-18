// This Component Used In (About Us) and (Cooking Ingredients) Sections
import React from "react";
import Container from "../global/Container";
import GlobalLink from "../global/GlobalLink";
import SecTitle from "../global/SecTitle";

function GeneralSection({
  title,
  subTitle,
  text,
  img,
 imgClass,
  alt,
}) {
  return (
    <div className="general-section">
      <Container>
        <div className="general-content">
          <div className="general-box">
            <SecTitle
              title={title}
              subTitle={subTitle}
            />
            <p className="general-info">{text}</p>
            <GlobalLink>Read more</GlobalLink>
          </div>
          <div className="general-img">
            <img
              src={img}
              className={imgClass}
              alt={alt}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GeneralSection;
