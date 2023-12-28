import React from "react";

const WeatherDisplay = ({ data }) => {
  const { location, current } = data;
  const { name, region, country } = location;
  const {
    temp_c: temperature,
    humidity,
    wind_kph: windSpeed,
    last_updated,
  } = current;
  const { text: weather } = current.condition;

  const locationName = name + ", " + region + ", " + country;

  return (
    <div className="p-3 m-5 my-10 mx-auto w-6/12 bg-orange-200">
      <h2 className="p-2 m-3 font-bold">{locationName}</h2>
      <h3 className="p-2 m-3">{weather} weather</h3>
      <p className="p-2 m-3">Temperature: {temperature} °C</p>
      <p className="p-2 m-3">Humidity: {humidity} %</p>
      <p className="p-2 m-3">Wind Speed: {windSpeed} m/s</p>
      <p className="p-2 m-3">Last Updated: {last_updated}</p>
    </div>
  );
};

export default WeatherDisplay;
