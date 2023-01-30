const Button = ({ clickFunction, text }) => {
    return <button onClick={clickFunction}>{text}</button>;
};

export default Button;
