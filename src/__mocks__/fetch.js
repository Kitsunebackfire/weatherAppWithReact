const mockResponse = {
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

export default mockResponse;
