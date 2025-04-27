import React, { useState } from 'react';

const WateringSchedule = () => {
  const [plantType, setPlantType] = useState('');
  const [climate, setClimate] = useState('');
  const [schedule, setSchedule] = useState('');

  const wateringSchedules = {
    Vegetable: {
      Hot: 'Every 1-2 days',
      Mild: 'Every 2-3 days',
      Cool: 'Every 3-4 days',
    },
    Fruit: {
      Hot: 'Every 2-3 days',
      Mild: 'Every 3-4 days',
      Cool: 'Every 4-5 days',
    },
    Flower: {
      Hot: 'Every 1-2 days',
      Mild: 'Every 2-3 days',
      Cool: 'Every 3-4 days',
    },
  };

  const handleGetSchedule = () => {
    if (plantType && climate) {
      const result = wateringSchedules[plantType][climate];
      setSchedule(result);
    } else {
      setSchedule('Please select both plant type and climate.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-green-700 text-center">Watering Schedule Suggestion💦</h2>

      {/* Plant Type Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Select Plant Type:</label>
        <select
          value={plantType}
          onChange={(e) => setPlantType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Choose Type --</option>
          <option value="Vegetable">Vegetables</option>
          <option value="Fruit">Fruits</option>
          <option value="Flower">Flowers</option>
        </select>
      </div>

      {/* Climate Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Select Climate:</label>
        <select
          value={climate}
          onChange={(e) => setClimate(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Choose Climate --</option>
          <option value="Hot">Hot</option>
          <option value="Mild">Mild</option>
          <option value="Cool">Cool</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleGetSchedule}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Get Watering Schedule
      </button>

      {/* Result Display */}
      {schedule && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800">
          {schedule}
        </div>
      )}
    </div>
  );
};

export default WateringSchedule;
