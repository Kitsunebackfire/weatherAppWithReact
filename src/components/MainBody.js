import React from "react";
import "./styling/MainBody.css";

const MainBody = ({ weatherData }) => {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const weatherDescription = weatherData.weather[0].description;
  // had to convert from kelvin and then round via math.round to eliminate excess decimal places
  const temp = Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32);
  const feelsLike = Math.round(
    (weatherData.main.feels_like - 273.15) * (9 / 5) + 32
  );
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;

  return (
    <main className="mainBody__container">
      <h1 className="mainBody__title">Weather App</h1>
      <div className="mainBody__weatherDescription">{weatherDescription}</div>
      <div className="mainBody__location">
        {city}, {country}
      </div>
      <div className="mainBody__detailsContainer">
        <div className="mainBody__tempContainer">
          <div className="mainBody__temp">{temp}</div>
          <div className="mainBody__fahrenheit">°F</div>
        </div>
        <div className="mainBody__details">
          <div className="mainBody__feelsLike">Feels like: {feelsLike}°F</div>
          <div className="mainBody__wind">Wind speed: {windSpeed} MPH</div>
          <div className="mainBody__humidity">Humidity: {humidity}%</div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
