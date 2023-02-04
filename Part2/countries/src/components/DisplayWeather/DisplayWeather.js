const DisplayWeather = ({ weather }) => {
    const urlIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div>
            <h3>
                The weather in {weather.name} is {weather.weather[0].description}
            </h3>
            <p>temperature {weather.main.temp}º Celcius</p>
            <img src={urlIcon} alt={`icon describing the weather at ${weather.name}`} />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    );
};

export default DisplayWeather;
