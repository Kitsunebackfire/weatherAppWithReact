import React, { useState } from "react";
import "./styling/Search.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const Search = ({
  errorMessage,
  setErrorMessage,
  getWeather,
  location,
  setLocation,
  resetInput,
}) => {
  const handleInputChange = (e) => {
    setLocation(e.target.value);
    //console.log(e.target.value);
  };

  const handleWeather = (e) => {
    e.preventDefault();
    if (location !== "") {
      getWeather(location);
    } else {
      setErrorMessage("Please enter a Location");
    }
  };

  return (
    <div className="search__container">
      <form
        onSubmit={(e) => handleWeather(e)}
        className="search__inputContainer"
      >
        <button className="search__button">
          <TravelExploreIcon className="search__searchIcon" />
        </button>
        <label htmlFor="searchCity" hidden>
          Search City
        </label>
        <input
          onChange={(e) => handleInputChange(e)}
          id="searchCity"
          className="search__input"
          placeholder="Search City (ex. Austin,Fort Worth,Boise)"
        />
      </form>
      <div className="search__error">{errorMessage}</div>
    </div>
  );
};

export default Search;
