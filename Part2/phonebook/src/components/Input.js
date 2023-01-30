const Input = ({ value, onChange, text }) => {
    return (
        <div>
            {text} <input value={value} onChange={onChange} />
        </div>
    );
};

export default Input;
