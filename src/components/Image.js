import React from "react";

const Image = ({ element, className }) => {
  const { attr } = element;
  return <img className={className} src={attr.src} alt={attr.alt} />;
};

export default Image;
