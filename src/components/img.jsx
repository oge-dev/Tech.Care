import React from 'react';

// Image Component definition
const Image = ({ src, alt }) => {
  return (
    // Image tag with src and alt attributes
    <img src={src} alt={alt} />
  );
};

export default Image;