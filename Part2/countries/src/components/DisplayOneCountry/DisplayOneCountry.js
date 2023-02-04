import styles from './DisplayOneCountry.module.css';
import service from '../../services/getData';
import { useEffect, useState } from 'react';
import DisplayWeather from '../DisplayWeather/DisplayWeather';

const DisplayOneCountry = ({ country }) => {
    const [weather, setWeather] = useState('');

    const getDataFromWeather = () => {
        if (country) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
            service.getAll(url).then((weatherData) => {
                setWeather(weatherData);
            });
        }
    };

    useEffect(getDataFromWeather, [country]);

    if (country === null) {
        return false;
    }

    return (
        <div className={styles.display}>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
            <p>Continent: {country.region}</p>

            <h4>Languages: </h4>
            <ul>
                {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt={country.flags.alt} />

            {weather ? <DisplayWeather weather={weather} /> : <p>Loagind weather data...</p>}
        </div>
    );
};

export default DisplayOneCountry;
