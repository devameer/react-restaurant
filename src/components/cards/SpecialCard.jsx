import React from "react";

function SpecialCard({
  img,
  alt,
  title,
  desc,
}) {
  return (
    <div className="special-type-card">
      <img  src={img} alt={alt} loading="lazy"/>
      <span className="special-type-title">{title}</span>
      <p className="special-type-text">{desc}</p>
    </div>
  );
}

export default SpecialCard;
