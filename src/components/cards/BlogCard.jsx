import React from "react";
import ReadLink from "../global/ReadLink";

function BlogCard({ title, desc, img }) {
  return (
    <div className="blog-card">
      <img  src={img} alt="blog Card Img" className="blog-card-img" loading="lazy"/>
      <div className="bc-flex">
        <div className="blog-card-info">
          <h5 className="blog-card-title">{title}</h5>
          <p className="blog-card-explanation">{desc}</p>
        </div>
        <ReadLink text="read more" />
      </div>
    </div>
  );
}

export default BlogCard;
