import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import {  getPlantById } from '../api/plantApis';
import { addPlant, deleteGardenPlants }  from '../api/gardenApis';
import { Link } from 'react-router-dom';
export default function DetailedPlantPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    const role = localStorage.getItem('userRole');
    const userId = localStorage.getItem('userId');
    let userPlants = localStorage.getItem('plants');
    userPlants = userPlants ? JSON.parse(userPlants) : [];
    let plantId = {id: id};
    useEffect(() => {
      const fetchPlant = async () => {
        try {
          const response = await getPlantById(id);
          setPlant(response.data);
        } catch (error) {
          console.error('Error fetching plant:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPlant();
    }, [id]);
    const handlePlantAdd = async (e) => {
        e.preventDefault();
        try {
            const resData = await addPlant( userId, id );
            console.log("Plant added successfully!", resData);
            navigate('/home/mygarden');
        } catch (err) {
            console.error("Request failed:", err.message);
        }
    };
    const handlePlantRemove = async (e) => {
        e.preventDefault();
        try {
            const resData = await deleteGardenPlants( userId, id );
            console.log("Plant removed successfully!", resData);
            navigate('/home/mygarden');
        } catch (err) {
            console.error("Request failed:", err.message);
        }
    };

      if (loading) {
        return (
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-1 flex justify-center items-center text-gray-500 text-lg">
              Loading plant details...
            </main>
            <Footer />
          </div>
        );
      }
  
    if (!plant) {
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1 flex justify-center items-center text-gray-500 text-lg">
            Plant details not available.
          </main>
          <Footer />
        </div>
      );
    }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 px-4 md:px-12 py-10">
        <BackButton />
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Section */}
            <img
              src={plant.imageUrl}
              alt={plant.name}
              className="w-100  h-68 rounded-lg object-cover"
            />

            {/* Details Section */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-green-700">{plant.name}</h2>
              <p className="italic text-gray-600 text-sm">{plant.scientificName}</p>
              <p className="text-sm text-gray-500">Category: <span className="capitalize">{plant.category}</span></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <p><strong>Climate:</strong> {plant.climate}</p>
                <p><strong>Soil:</strong> {plant.soil}</p>
                <p><strong>Sunlight:</strong> {plant.sunlight}</p>
                <p><strong>Watering:</strong> {plant.wateringFrequency}</p>
                <p><strong>Growth Type:</strong> {plant.growthType}</p>
              </div>

              <p className="mt-4 text-gray-700">{plant.description}</p>
            </div>
          </div>
        </div>
          {/*  Add Plant to My Garden Button*/}
        <div className="flex flex-col items-center gap-4 mt-6 mb-6">
              {
                  !userPlants.some(plant => plant.id === plantId.id) ? (
              <button
              className="flex items-center gap-1 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
              onClick={handlePlantAdd}
              >
                  Add {plant.name} to My Garden
              </button>): (
              <button
                  className="flex items-center gap-1 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
                  onClick={handlePlantRemove}
              >
                  Remove {plant.name} from My Garden
              </button>)
              }
            {role === 'gardener' && (
            <Link to={`/home/${id}/allNotes`}>
            <button
                className="flex items-center gap-1 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
            >
                View Notes
            </button>
            </Link>
            )}
            {role === 'gardener' && (
            <Link to={`/home/${userId}/${id}/addReminder`}>
                <button
                    className="flex items-center gap-1 border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition-colors px-4 py-2 rounded-full text-sm font-medium"
                >
                    Add a Reminder
                </button>
            </Link>
                )}
    </div>


      </main>

      <Footer />
    </div>
  );
}
