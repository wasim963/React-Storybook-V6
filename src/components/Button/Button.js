import React from 'react';
import './Button.css';

function Button( props ) {
    const { variant = 'primary', background, children, ...rest } = props;

  return (
    <button
        className={ `button ${ variant } ${background}` }
    
        { ...rest }
    >
        { children }
    </button>
  )
}

export default Button