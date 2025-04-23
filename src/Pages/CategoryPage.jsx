
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPlantsByCategory } from '../api/plantApis';
import PlantCard from '../components/PlantCard';
import { Link, useParams } from 'react-router-dom';


export default function VegCategoryPage() {
  const { category } = useParams();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants  = async () => {
      try {
        const res = await getPlantsByCategory(category);
        setPlants(res.data);
      } catch (error) {
        console.error('Error fetching vegetable plants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [category]);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-12 py-10">
        <h1 className="text-center text-xl font-medium text-gray-800 mb-6">{category} Plants</h1>

        {/* Add New Plant Button */}
        <Link to="/plant/addplant">
          <div className="flex justify-center mb-8">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition">
              + Add a New Plant
            </button>
          </div>
        </Link>

        {/* Grid of Plant Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 place-items-center">
          {plants.map((plant, idx) => (
            <PlantCard
              key={plant._id}
              id={plant._id}
              name={plant.name}
              botanicalName={plant.scientificName}
              image={plant.imageUrl}
              category = {plant.category}
            />
          ))}
        </div>

        
              
        
      </main>

      <Footer />
    </div>
  );
}
