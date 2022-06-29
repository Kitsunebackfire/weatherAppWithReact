import React from "react";
import "./styling/Search.css";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const Search = () => {
  return (
    <div className="search__container">
      <form className="search__inputContainer">
        <button className="search__button">
          <TravelExploreIcon className="search__searchIcon" />
        </button>
        <label htmlFor="searchCity" hidden>
          Search City
        </label>
        <input
          id="searchCity"
          className="search__input"
          placeholder="Search City (ex. Austin,Fort Worth,Boise)"
        />
      </form>
      <div className="search__error">error message</div>
    </div>
  );
};

export default Search;
