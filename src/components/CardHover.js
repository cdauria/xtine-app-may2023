import React, { useState } from 'react';

const CardHover = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={hoverStyles}
    >
      {children}
    </div>
  );
};

export default CardHover;
