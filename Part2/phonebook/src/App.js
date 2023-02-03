import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personServices from './services/persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');
    const [infoMessage, setInfoMessage] = useState(null);
    const [messageType, setMessageType] = useState('');
    let isUpdate = false;

    const getData = () => {
        personServices.getAll().then((initialData) => {
            setPersons(initialData);
        });
    };

    useEffect(getData, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (verifyName()) {
            isUpdate ? handleUpdate() : handleCreate();
        }

        setNewName('');
        setNewNumber('');
    };

    const handleCreate = () => {
        const personObject = { name: newName, number: newNumber };
        personServices.create(personObject).then((returnedData) => {
            let message = `Added ${newName} to PhoneBook!`;
            setMessageType('success');
            handleNotification(message, 5000);
            setPersons(persons.concat(returnedData));
        });
    };

    const handleUpdate = () => {
        const person = persons.find((p) => p.name.toLowerCase() === newName.toLocaleLowerCase());
        const changedPerson = { ...person, number: newNumber };

        personServices
            .update(changedPerson)
            .then((returnedData) => {
                let message = `Updated ${changedPerson.name} with success!`;
                setMessageType('success');
                handleNotification(message, 5000);
                setPersons(persons.map((p) => (p.id !== changedPerson.id ? p : changedPerson)));
            })
            .catch((error) => {
                setMessageType('error');
                handleError(error, person.id, person.name);
            });
    };

    const handleDelete = (id, name) => {
        personServices
            .deleteData(id, name)
            .then((returnedData) => {
                if (returnedData.status === 200) {
                    setPersons(persons.filter((p) => p.id !== id));
                }
            })
            .catch((error) => {
                setMessageType('error');
                handleError(error, id, name);
            });
    };

    const handleError = (error, id, name) => {
        console.log(error);
        let message = `Information of ${name} has already been removed from server.`;
        handleNotification(message, 5000);
        setPersons(persons.filter((p) => p.id !== id));
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

    const handleNotification = (message, time) => {
        setInfoMessage(message);

        setTimeout(() => {
            setMessageType('');
            setInfoMessage(null);
        }, time);
    };

    const verifyName = () => {
        if (
            persons.filter((person) => person.name.toLowerCase() === newName.toLowerCase()).length >
            0
        ) {
            isUpdate = true;
            return window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one?`
            )
                ? true
                : false;
        }

        isUpdate = false;
        return true;
    };

    const SearchedNames = persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={infoMessage} type={messageType} />
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
                <Persons persons={SearchedNames} deleteFunction={handleDelete} />
            </div>
        </div>
    );
};

export default App;
