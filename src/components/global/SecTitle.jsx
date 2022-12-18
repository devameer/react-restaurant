import React from "react";

function SecTitle({ title, subTitle }) {
  return (
    <div className="global-titles">
      <h2 className="section-title">{title}</h2>
      <p className="section-sub-title">{subTitle}</p>
    </div>
  );
}

export default SecTitle;
