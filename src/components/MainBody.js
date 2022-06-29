import React from "react";
import "./styling/MainBody.css";

const MainBody = ({ weatherData }) => {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const weatherDescription = weatherData.weather[0].description;
  // had to convert from kelvin and then round via math.round to eliminate excess decimal places
  const temp = Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32);

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
          <div className="mainBody__feelsLike">Feels like: 93°F</div>
          <div className="mainBody__wind">Wind speed: 23 MPH</div>
          <div className="mainBody__humidity">Humidity: 71%</div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
