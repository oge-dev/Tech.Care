import React from 'react';

// Link Component definition
const Link = ({ href, text }) => {
  return (
    // Anchor tag with href, target, and rel attributes
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Link;