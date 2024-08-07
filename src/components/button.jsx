import React from 'react';

// Buttons component definition
const Buttons = ({ type, text }) => {
  return (
    // Button element with type attribute and text content
    <button type={type}>{text}</button>
  );
};

export default Buttons;