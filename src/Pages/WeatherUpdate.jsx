import React, { useState } from "react";
import WeatherCard from "../components/WeatherCard";
import WeeklyForecast from "../components/WeeklyForecast";
import { useWeather } from "../hooks/useWeather";
import { getGardeningTips } from "../utils/getGardeningTips";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WeatherUpdate = () => {
  const [location, setLocation] = useState("Karachi");
  const [inputValue, setInputValue] = useState("Karachi");
  const { weather, loading } = useWeather(location);

  const handleUpdateClick = () => {
    setLocation(inputValue);
  };


  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <Navbar/>
    <main className="flex-grow px-4 md:px-12 py-10">
        <div className="min-h-screen bg-green-50 p-6">

        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
            🌿 Weather & Gardening Updates
            </h1>

            {/* Location Input */}
            <div className="mb-6 flex justify-center">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your city"
                className="border border-green-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
                onClick={handleUpdateClick}
                className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700 transition"
            >
                Update
            </button>
            </div>

            {/* Weather Card */}
            <div className="mb-8">
            <WeatherCard location={location} />
            </div>

            {/* Gardening Tips */}
            <div className="p-6 bg-green-100 rounded-xl shadow mb-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
                🌱 Gardening Tip of the Day
            </h2>
            <p className="text-green-700 text-lg">
                {loading
                ? "Loading tip..."
                : getGardeningTips(weather)}
            </p>
            </div>

            {/* Weekly Forecast */}
            <div>
            <WeeklyForecast location={location}  />
            </div>
        </div>
        </div>
    </main>
    <Footer/>
</div>
  );
};

export default WeatherUpdate;
