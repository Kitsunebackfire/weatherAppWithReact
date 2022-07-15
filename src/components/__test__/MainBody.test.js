import { render, screen } from "@testing-library/react";

import MainBody from "../MainBody";

const weatherTestingData = {
  coord: {
    lon: -96.7836,
    lat: 32.7668,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 311.64,
    feels_like: 314.21,
    temp_min: 309.66,
    temp_max: 313.47,
    pressure: 1016,
    humidity: 32,
  },
  visibility: 10000,
  wind: {
    speed: 2.68,
    deg: 77,
    gust: 5.36,
  },
  clouds: {
    all: 20,
  },
  dt: 1657733856,
  sys: {
    type: 2,
    id: 2075302,
    country: "US",
    sunrise: 1657711717,
    sunset: 1657762605,
  },
  timezone: -18000,
  id: 4684904,
  name: "Dallas",
  cod: 200,
};

describe("MainBody.js renders data properly when passed through", () => {
  test("MainBody container renders", () => {
    render(<MainBody weatherData={weatherTestingData} />);
    const titleElement = screen.getByText(/Weather App/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("weather information renders from props", () => {
    render(<MainBody weatherData={weatherTestingData} />);
    const weatherDescription = screen.getByText(/few clouds/i);
    const location = screen.getByText(/dallas/i);
    const temp = screen.getByText(/101/);
    const feelsLikeTemp = screen.getByText(/106/);
    const wind = screen.getByText(/2.68/);
    const humidity = screen.getByText(/32/);

    expect(weatherDescription).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
    expect(feelsLikeTemp).toBeInTheDocument();
    expect(wind).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
  });
});
