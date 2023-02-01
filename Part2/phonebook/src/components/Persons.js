import Person from './Person';

const Persons = ({ persons, deleteFunction }) => {
    return (
        <div>
            {persons.map((person) => (
                <Person key={person.name} person={person} deleteFunction={deleteFunction} />
            ))}
        </div>
    );
};

export default Persons;
