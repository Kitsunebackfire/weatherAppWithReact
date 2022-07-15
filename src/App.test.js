import { render, screen } from "@testing-library/react";
import App from "./App";

import { rest } from "msw";
import { setupServer } from "msw/node";

const url = "https://api.openweathermap.org/data/2.5/weather?";

const responseObject = {
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

const response = rest.get(url, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(responseObject));
});

const server = new setupServer(response);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders Weather App title element", () => {
  render(<App />);
  const titleElement = screen.getByText(/Weather App/i);
  expect(titleElement).toBeInTheDocument();
});

describe("api", () => {
  test("api test server connects", async () => {
    render(<App />);
    const cityName = await screen.findByText(/Dallas/i);
    expect(cityName).toBeVisible();
  });

  test("weather description renders", async () => {
    render(<App />);
    const description = await screen.findByText(/few clouds/i);
    expect(description).toBeVisible();
  });
});
