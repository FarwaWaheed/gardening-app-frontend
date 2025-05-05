import React from "react";
import { useWeeklyForecast } from "../hooks/useWeeklyForecast";

const WeeklyForecast = ({ location = "Mumbai" }) => {
  const { forecast, loading } = useWeeklyForecast(location);

  // Helper to get daily forecasts (filter for 12:00:00)
  const getDailyForecasts = () => {
    if (!forecast || !forecast.list) return [];

    const dailyForecasts = forecast.list.filter((entry) =>
      entry.dt_txt.includes("12:00:00")
    );

    return dailyForecasts;
  };

  const dailyForecasts = getDailyForecasts();

  return (
    <div className="p-4 bg-green-100 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-800">🌦️ 5-Day Forecast</h2>

      {loading ? (
        <p>Loading forecast...</p>
      ) : dailyForecasts.length > 0 ? (
        dailyForecasts.map((day, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2 border-b border-green-300"
          >
            <span className="text-green-800 font-medium">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="text-green-700">{day.weather[0].main}</span>
            <span className="text-green-800 font-semibold">
              🌡️ {Math.round(day.main.temp)}°C
            </span>
            {/* <div>
            <p className="mt-1 text-green-600 text-sm italic">
            🌱 {getGardeningTips(day.weather[0].main)}
            </p>
            </div> */}
          </div>
          
        ))
      ) : (
        <p>No forecast data available.</p>
      )}
    </div>
  );
};

export default WeeklyForecast;
