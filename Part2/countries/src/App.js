import { useEffect, useState } from 'react';
import DisplayManyCountries from './components/DisplayManyCountries/DisplayManyCountries';
import DisplayOneCountry from './components/DisplayOneCountry/DisplayOneCountry';
import Form from './components/Form/Form';
import service from './services/getData';

function App() {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [foundCountries, setFoundCountries] = useState([]);
    const [displayCountry, setDisplayCountry] = useState(null);

    const getData = () => {
        const url = 'https://restcountries.com/v3.1/all';
        service.getAll(url).then((initialData) => {
            setCountries(initialData);
        });
    };

    useEffect(getData, []);

    const findingCountries = () => {
        setDisplayCountry(null);
        const temp = countries.filter((c) => {
            if (c.name.common.toLowerCase().includes(search.toLowerCase())) return c;
            return null;
        });

        setFoundCountries(temp);
    };

    useEffect(findingCountries, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleDisplayCountryInfo = (country) => {
        setDisplayCountry(country);
    };

    return (
        <div>
            <Form value={search} handleChange={handleChange} />
            {foundCountries && foundCountries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : foundCountries.length === 1 ? (
                <DisplayOneCountry country={foundCountries[0]} />
            ) : (
                <DisplayManyCountries
                    countries={foundCountries}
                    handleDisplay={handleDisplayCountryInfo}
                />
            )}

            <DisplayOneCountry country={displayCountry} />
        </div>
    );
}

export default App;
