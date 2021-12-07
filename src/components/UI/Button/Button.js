import React from 'react';
import './Button.scss';

const Button = ({ type = 'button', cls = null, content = null, handleClick = () => { } }) => (
   <button type={type} className={`_btn ${cls}`} onClick={handleClick}>{content}</button>
)

export default Button;