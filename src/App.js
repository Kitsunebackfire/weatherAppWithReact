import "./App.css";
import MainBody from "./components/MainBody";
import Search from "./components/Search";
import React, { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState("");

  async function retreiveWeather(location = "Fort Worth") {
    try {
      const retreivedData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1e7c32808ec4dc6f51ae92399c20c43b`
      );
      const jsonData = await retreivedData.json();
      //return jsonData;
      setWeatherData(jsonData);
    } catch (error) {
      console.log(
        `${error}, error has been caught initially while being api info. `
      );
    }
  }
  useEffect(() => {
    try {
      retreiveWeather();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <button onClick={() => console.log(weatherData)}>
        click for weather data
      </button>
      <Search retreiveWeather={retreiveWeather} />
      <MainBody weatherData={weatherData} />
    </div>
  );
}

export default App;
