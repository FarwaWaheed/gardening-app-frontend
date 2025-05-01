export const getGardeningTips = (weather) => {
    if (!weather) return "No tips available.";
  
    const temp = weather.main.temp;
    const condition = weather.weather[0].main;
  
    if (temp > 30) return "Water your plants early morning or late evening to avoid evaporation.";
    if (condition === "Rain") return "Avoid watering, let nature do the job.";
    if (temp < 15) return "Protect sensitive plants from cold temperatures.";
  
    return "Keep an eye on soil moisture levels.";
  };
  