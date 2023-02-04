import styles from './Form.module.css';

const Form = ({ value, handleChange }) => {
    return (
        <form className={styles.form}>
            <label htmlFor="txtCountry">Find countries: </label>
            <input type="text" id="txtCountry" value={value} onChange={handleChange} />
        </form>
    );
};

export default Form;
