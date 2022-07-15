import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

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

const responseFailed = rest.get("*", (req, res, ctx) => {
  //console.error("error 404 occured");
  return res(
    ctx.status(404),
    ctx.json({
      cod: 404,
      message: "city not found",
    })
  );
});

const server = setupServer(response, responseFailed);

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

  test("weather description renders from deeper within api object", async () => {
    // issues were present when initially relaying information from api that was deeper within
    // tested this to ensure info would be passed through to MainBody.js
    render(<App />);
    const description = await screen.findByText(/few clouds/i);
    expect(description).toBeVisible();
  });

  test("handles errors and displays proper text below search input bar upon receiving any cod not 200", async () => {
    render(<App />);
    // force server failure response in order to verify
    server.use(responseFailed);
    const errorMessage = await screen.findByText(/Please enter a valid City/i);
    expect(errorMessage).toBeInTheDocument();
    // verified that test properly functioned by console.logging the value or error message
    //console.log(errorMessage);
  });
});

describe("search input", () => {
  test("search render in App", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Search City/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("search Input can be typed into", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Search City/i);
    fireEvent.change(inputElement, { target: { value: "Pawnie" } });
    //console.log(inputElement.value);
    expect(inputElement.value).toBe("Pawnie");
  });
});
