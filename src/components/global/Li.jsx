import React from "react";

function Li({ className, href, text }) {
  return (
    <li className={className}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default Li;
