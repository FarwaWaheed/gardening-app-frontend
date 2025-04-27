import React, { useState } from 'react';

const PestControlTips = () => {
  const [pest, setPest] = useState('');
  const [tip, setTip] = useState('');

  const pestControlMeasures = {
    Aphids: 'Spray neem oil or a mild soap-water solution on affected areas.',
    Whiteflies: 'Use yellow sticky traps and neem oil spray.',
    Mealybugs: 'Dab bugs with a cotton swab dipped in rubbing alcohol.',
    'Spider Mites': 'Spray plants with water and apply neem oil to control infestations.',
    'Fungal Diseases': 'Remove infected leaves and treat with a natural fungicide. Avoid overwatering.',
  };

  const handleGetTip = () => {
    if (pest) {
      const result = pestControlMeasures[pest];
      setTip(result);
    } else {
      setTip('Please select a pest type.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-green-700 text-center">Pest Control Tips 🐛</h2>

      {/* Pest Type Dropdown */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Select Pest Type:</label>
        <select
          value={pest}
          onChange={(e) => setPest(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Choose Pest --</option>
          <option value="Aphids">Aphids</option>
          <option value="Whiteflies">Whiteflies</option>
          <option value="Mealybugs">Mealybugs</option>
          <option value="Spider Mites">Spider Mites</option>
          <option value="Fungal Diseases">Fungal Diseases</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleGetTip}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Get Pest Control Tip
      </button>

      {/* Result Display */}
      {tip && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-green-800">
          {tip}
        </div>
      )}
    </div>
  );
};

export default PestControlTips;
