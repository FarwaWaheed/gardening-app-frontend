import { useState, useEffect } from "react";

const API_KEY = "42b12eb933a0a343daa6cb5fd1121848";

export const useWeeklyForecast = (location) => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!location) return;

    const fetchForecast = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error("Failed to fetch forecast.");
        const data = await response.json();
        setForecast(data);
      } catch (error) {
        console.error("Error fetching forecast:", error);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [location]);

  return { forecast, loading };
};
