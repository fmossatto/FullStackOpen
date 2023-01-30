import Input from './Input';

const PersonForm = ({ newName, newNumber, handleNameChange, handleNumberChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Input value={newName} onChange={handleNameChange} text="name" />
            <Input value={newNumber} onChange={handleNumberChange} text="number" />
            <button type="submit">add</button>
        </form>
    );
};

export default PersonForm;
