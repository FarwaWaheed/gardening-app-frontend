import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {suggestPlants} from '../api/plantApis';
import PlantCard from '../components/PlantCard';
import BackButton from '../components/BackButton';

export default function PlantSuggestionPage() {
  const [formData, setFormData] = useState({
    climate: '',
    soil: '',
    sunlight: '',
  });

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSuggest = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await suggestPlants (formData);
      setSuggestions(res.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      alert('Something went wrong while fetching suggestions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-10 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6 text-center text-green-700">Find Plants for Your Conditions</h1>

        <BackButton/>

        <form onSubmit={handleSuggest} className="bg-white p-6 rounded-xl shadow space-y-4">

          {/* Climate Dropdown */}
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Climate</label>
            <select
              name="climate"
              value={formData.climate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
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
              className="w-full border px-3 py-2 rounded"
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
              className="w-full border px-3 py-2 rounded"
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

        {/* Suggestion Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {suggestions.map((plant) => (
            <PlantCard
              key={plant._id}
              id={plant._id}
              name={plant.name}
              botanicalName={plant.scientificName}
              image={plant.imageUrl}
            />
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
