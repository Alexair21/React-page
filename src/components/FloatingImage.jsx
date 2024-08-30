import React from "react";

const FloatingImage = ({ src, alt, position }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute w-[10%] md:w-[8%] ${position === "left" ? "left-4" : "right-4"} top-1/2 transform -translate-y-1/2`}
      style={{ zIndex: -1 }}
    />
  );
};

export default FloatingImage;
