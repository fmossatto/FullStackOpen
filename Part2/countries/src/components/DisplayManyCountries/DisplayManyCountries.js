import styles from './DisplayManyCountries.module.css';
const DisplayManyCountries = ({ countries, handleDisplay }) => {
    return (
        <div className={styles.display}>
            {countries &&
                countries.map((country) => (
                    <div key={country.latlng[0] + country.latlng[1]}>
                        <p>{country.name.common}</p>
                        <button onClick={() => handleDisplay(country)}>Show</button>
                    </div>
                ))}
        </div>
    );
};

export default DisplayManyCountries;
