import React from "react";
import Swiper from "../global/Swiper";
import SecTitle from "../global/SecTitle";

function Reviews() {
  return (
    <div className="reviews-section">
      <SecTitle
        title="Reviews"
        subTitle="words from our food lovers"
      />
      <Swiper />
    </div>
  );
}

export default Reviews;
