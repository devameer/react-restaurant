import React from "react";

function FoodCard({
  img,
  alt,
  title,
  desc,
  number,
}) {
  return (
    <div className="food-category">
      <img className="category-img" src={img} alt={alt} />
      <div className="category-info">
        <p className="category-title">{title}</p>
        <p className="category-extra-info">{desc}</p>
      </div>
      <div className="category-line"></div>
      <div className="category-rs">Rs {number}</div>
    </div>
  );
}

export default FoodCard;
