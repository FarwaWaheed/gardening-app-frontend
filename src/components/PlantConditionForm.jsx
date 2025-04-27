import React from 'react';

export default function PlantConditionForm({ formData, handleChange, handleSuggest, loading }) {
  return (
    <form onSubmit={handleSuggest} className="bg-white p-6 rounded-2xl shadow space-y-4">
      <h1 className="text-2xl font-semibold mb-6 text-center text-green-700">
        Find Plants for Your Conditions
      </h1>

      {/* Climate Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Preferred Climate</label>
        <select
          name="climate"
          value={formData.climate}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Any --</option>
          <option value="Warm">Warm</option>
          <option value="Cool">Cool</option>
          <option value="Tropical">Tropical</option>
          <option value="Temperate">Temperate</option>
        </select>
      </div>

      {/* Soil Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Soil Type</label>
        <select
          name="soil"
          value={formData.soil}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Any --</option>
          <option value="Loamy">Loamy</option>
          <option value="Sandy">Sandy</option>
          <option value="Sandy loam">Sandy loam</option>
          <option value="Fertile">Fertile</option>
          <option value="Well-drained">Well-drained</option>
        </select>
      </div>

      {/* Sunlight Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Sunlight Preference</label>
        <select
          name="sunlight"
          value={formData.sunlight}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Any --</option>
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Sun">Partial Sun</option>
          <option value="6+ hours of sun">6+ hours of sun</option>
          <option value="Full Sun to Partial Shade">Full Sun to Partial Shade</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? 'Searching...' : 'Find Suggestions'}
      </button>
    </form>
  );
}
