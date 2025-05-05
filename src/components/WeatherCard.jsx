import React from "react";
import { useWeather } from "../hooks/useWeather";

const WeatherCard = ({ location }) => {
  const { weather, loading } = useWeather(location);

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-xl shadow text-center">
        <p className="text-green-700 text-lg">Loading weather data...</p>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="p-6 bg-white rounded-xl shadow text-center">
        <p className="text-red-600 text-lg">Could not fetch weather data.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-green-800 mb-1">{location}</h2>
        <p className="text-green-700 text-lg">{weather.weather[0].description}</p>
        <p className="text-green-900 text-4xl font-bold mt-2">
          🌡️ {weather.main.temp}°C
        </p>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather icon"
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
