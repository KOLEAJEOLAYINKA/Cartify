import React from "react";

const ScrollBar = ({ children }) => {
  return (
    <div className="scrollbar-container">
      <div className="scrollbar-content">{children}</div>
    </div>
  );
};

export default ScrollBar;
