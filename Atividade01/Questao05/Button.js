import React from 'react';
import { ThemeContext } from '../context/themeContext';

function Button(props) {
  return (
    <ThemeContext.Consumer>
      {toggle => (
        <button onClick={toggle} {...props}>
          Toggle theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default Button;