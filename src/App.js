import "./App.css";
import MainBody from "./components/MainBody";
import Search from "./components/Search";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import apiKey from "./components/Api";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const resetInput = () => {
    const inputField = document.getElementById("searchCity");
    inputField.value = "";
  };

  async function getWeather(location = "Fort Worth") {
    try {
      const retreivedData = await fetch(apiKey(location));
      const jsonData = await retreivedData.json();
      //console.log(jsonData);
      //return jsonData;
      if (jsonData.cod !== 200) {
        setErrorMessage("Please enter a valid City");
        setLocation("");
        console.log("404 error");
        resetInput();
      } else {
        setWeatherData(jsonData);
        setErrorMessage("");
        resetInput();
        setLocation("");
      }
    } catch (error) {
      console.log(
        `${error}, error has been caught initially while loading api info. `
      );
    }
  }
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="App">
      <Search
        setWeatherData={setWeatherData}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        getWeather={getWeather}
        setLocation={setLocation}
        location={location}
      />
      <MainBody weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
