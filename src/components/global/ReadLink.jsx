import React from "react";

function ReadLink({ text }) {
  return (
    <div className="read-link-box">
      <a href="/#" className="read-link">
        {text}
      </a>
    </div>
  );
}

export default ReadLink;
