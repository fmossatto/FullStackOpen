import React from 'react';

const Button = ({ text, clickFunction }) => {
    return <button onClick={clickFunction}>{text}</button>;
};

export default Button;
