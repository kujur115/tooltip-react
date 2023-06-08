import React, { useState } from "react";

const Tooltip = ({ text, children, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    console.log("tooltip");
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip">
      <div
        className="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {/* {showTooltip && (
        <div className={`tooltip-content ${position}`}>{text}</div>
      )} */}
      {showTooltip && (
        <div className={`tooltip-content show ${position}`}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
