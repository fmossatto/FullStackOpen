const Person = ({ person, deleteFunction }) => {
    return (
        <div>
            {person.name} {person.number}
            <button onClick={() => deleteFunction(person.id, person.name)}>delete</button>
        </div>
    );
};

export default Person;
