import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllPlants, searchPlants } from '../api/plantApis';
import { FiSearch } from 'react-icons/fi';
import PlantCard from '../components/PlantCard';


export default function SearchPlantsPage() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch all plants on mount
  useEffect(() => {
    const fetchAllPlants = async () => {
      try {
        const res = await getAllPlants();
        setPlants(res.data);
      } catch (error) {
        console.error('Error fetching all plants:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPlants();
  }, []);

  // Handle search button click
  const handleSearch = async () => {
    if (!query.trim()) return; // skip empty search
    setLoading(true);
    try {
      const res = await searchPlants(query);
      setPlants(res.data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center py-20">Loading plants...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-12 py-10">
        <h1 className="text-2xl font-bold text-center mb-8 text-green-700">Search & Discover Plants</h1>

        {/* Search bar */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md w-full max-w-lg">
            <input
              type="text"
              placeholder="Search plants by name, category, or scientific name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
            <button onClick={handleSearch} className="ml-3 text-green-600">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Plant cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {plants.map((plant) => (
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
