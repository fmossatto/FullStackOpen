import Input from './Input';

const Filter = ({ value, onChange, text }) => {
    return <Input value={value} onChange={onChange} text="filter shown with" />;
};

export default Filter;
