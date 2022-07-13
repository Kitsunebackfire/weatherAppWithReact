import React from "react";
import "./styling/MainBody.css";

const MainBody = ({ weatherData }) => {
  return (
    <main className="mainBody__container">
      <h1 className="mainBody__title">Weather App</h1>
      <div className="mainBody__weatherDescription">
        {weatherData.weather ? weatherData.weather[0].description : null}
      </div>
      <div className="mainBody__location">
        {weatherData.name}, {weatherData.sys ? weatherData.sys.country : null}
      </div>
      <div className="mainBody__detailsContainer">
        <div className="mainBody__tempContainer">
          <div className="mainBody__temp">
            {weatherData.main
              ? Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32)
              : null}
          </div>
          <div className="mainBody__fahrenheit">°F</div>
        </div>
        <div className="mainBody__details">
          <div className="mainBody__feelsLike">
            Feels like:{" "}
            {weatherData.main
              ? Math.round(
                  (weatherData.main.feels_like - 273.15) * (9 / 5) + 32
                )
              : null}{" "}
            °F
          </div>
          <div className="mainBody__wind">
            Wind speed: {weatherData.wind ? weatherData.wind.speed : null} MPH
          </div>
          <div className="mainBody__humidity">
            Humidity: {weatherData.main ? weatherData.main.humidity : null}%
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;

/* 
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
    </main>*/
