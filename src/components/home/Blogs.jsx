import React from "react";
import BlogCard from "../cards/BlogCard";
import SecTitle from "../global/SecTitle";

function Blogs() {
  return (
    <div className="blogs-section">
      <SecTitle
        title="Blogs"
        subTitle="words from our food lovers"
      />
      <div className="blog-box-flex">
        <BlogCard
          img="/assets/dining1.png"
          title="Cooking Dining Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
        <BlogCard
          img="/assets/dining2.png"
          title="Cooking Dining Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
        <BlogCard
          img="/assets/dining3.png"
          title="Cooking Dining Experience"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
        />
      </div>
    </div>
  );
}

export default Blogs;
