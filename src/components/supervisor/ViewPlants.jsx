import React, { useEffect, useState } from 'react';
import { getAllPlants} from '../../api/plantApis';
import { Link } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';

export default function ViewPlants() {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
      const res = await getAllPlants();
      setPlants(res.data);
    } catch (err) {
      console.error("Failed to fetch plants:", err.message);
    }
  };

  
  useEffect(() => {
    fetchPlants();
  }, []);

  return (
  <div >
    <Link to="/plant/addplant">
      <button className="  bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition ">
        + Add a New Plant
      </button>
      </Link>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      
      {plants.map((plant) => (
        <div key={plant._id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
          <img src={plant.imageUrl} alt={plant.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-bold text-green-700">{plant.name}</h2>
          <p className="text-sm text-gray-600 mb-2 italic">{plant.category}</p>

          <div className="flex justify-between mt-4 space-x-2">
            <Link to={`/home/category/${plant.category}/${plant._id}`} className="flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm">
              <MdVisibility className="mr-1" /> View
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>  
  );
}
