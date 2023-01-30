import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const personObject = { name: newName, number: newNumber };
        if (verifyName()) {
            setPersons(persons.concat(personObject));
        }

        setNewName('');
        setNewNumber('');
    };

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const verifyName = () => {
        if (
            persons.filter((name) => name.name.toLowerCase() === newName.toLowerCase()).length > 0
        ) {
            alert(`${newName} is already added to phonebook`);
            return false;
        }
        return true;
    };

    const SearchedNames = persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={search} onChange={handleSearchChange} />

            <h2>add a new</h2>
            <PersonForm
                handleSubmit={handleSubmit}
                newName={newName}
                newNumber={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
            />

            <h2>Numbers</h2>
            <div>
                <Persons persons={SearchedNames} />
            </div>
        </div>
    );
};

export default App;
