import React from "react";

function SlideCard({ img, name, desc }) {
  return (
    <div className="slide-card">
      <div className="slider-card-info">
        <img
          src={img}
          alt="slider Card Img"
          className="slider-card-img"
          loading="lazy"
        />
        <div className="slider-card-person">
          <p className="slider-person-name">{name}</p>
          <div className="slider-stars-box">
            <img
              src="/assets/star.png"
              alt="star Img"
              className="slider-star"
              loading="lazy"
            />
            <img
              src="/assets/star.png"
              alt="star Img"
              className="slider-star"
              loading="lazy"
            />
            <img
              src="/assets/star.png"
              alt="star Img"
              className="slider-star"
              loading="lazy"
            />
            <img
              src="/assets/star.png"
              alt="star Img"
              className="slider-star"
              loading="lazy"
            />
            <img
              src="/assets/star.png"
              alt="star Img"
              className="slider-star"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <p className="slider-card-text">{desc}</p>
    </div>
  );
}

export default SlideCard;
