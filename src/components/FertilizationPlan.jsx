import React, { useState } from 'react';

const FertilizationPlan = () => {
  const [growthType, setGrowthType] = useState('');
  const [plan, setPlan] = useState('');

  const fertilizationPlans = {
    Annual: 'Fertilize every 4-6 weeks with a balanced NPK (10-10-10) fertilizer.',
    Perennial: 'Apply slow-release fertilizer twice a year — once in spring and once in fall.',
    Climber: 'Use a high-nitrogen fertilizer during active growth, then a balanced fertilizer for flowering.',
    Vine: 'Use a high-nitrogen fertilizer during active growth, then a balanced fertilizer for flowering.',
  };

  const handleGetPlan = () => {
    if (growthType) {
      const result = fertilizationPlans[growthType];
      setPlan(result);
    } else {
      setPlan('Please select a growth type.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-green-700 text-center">Fertilization Plan Suggestion 🌿</h2>

      {/* Growth Type Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Select Growth Type:</label>
        <select
          value={growthType}
          onChange={(e) => setGrowthType(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Choose Growth Type --</option>
          <option value="Annual">Annual</option>
          <option value="Perennial">Perennial</option>
          <option value="Climber">Climber</option>
          <option value="Vine">Vine</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleGetPlan}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Get Fertilization Plan
      </button>

      {/* Result Display */}
      {plan && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800">
          {plan}
        </div>
      )}
    </div>
  );
};

export default FertilizationPlan;
