import React from "react";
import "./styling/MainBody.css";

const MainBody = () => {
  return (
    <main className="mainBody__container">
      <h1>Weather App</h1>
      <div>weather description</div>
      <div>city, state</div>
      <div>detailed info</div>
    </main>
  );
};

export default MainBody;
