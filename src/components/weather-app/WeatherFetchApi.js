import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const apiKey = "006eefc443414c2dbd3182527232712";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=" +
          apiKey +
          "&q=" +
          searchQuery +
          "&aqi=no"
      );

      setWeatherData(response.data);
      console.log("hello" + searchQuery);
      console.log(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError("Location not found. Please try again.");
    }
  };

  return (
    <div className="text-center m-3 p-2 my-20 mx-auto w-6/12 bg-orange-400">
      <h1 className="m-2 p-3 font-bold text-3xl">Weather App</h1>
      <div>
        <input
          className="p-3 m-2 border hover:border-black"
          type="text"
          placeholder="Enter city name or zip code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-green-500 p-3 m-2 border hover:border-black"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && (
        <p className="p-2 m-3 font-bold" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
