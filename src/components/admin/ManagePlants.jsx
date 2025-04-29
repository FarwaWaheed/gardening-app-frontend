import React, { useEffect, useState } from 'react';
import { getAllPlants, deletePlant } from '../../api/plantApis';
import { Link } from 'react-router-dom';
import { MdVisibility, MdEdit, MdDelete } from 'react-icons/md';

export default function ManagePlants() {
  const [plants, setPlants] = useState([]);

  const fetchPlants = async () => {
    try {
      const res = await getAllPlants();
      setPlants(res.data);
    } catch (err) {
      console.error("Failed to fetch plants:", err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this plant?')) {
      try {
        await deletePlant(id);
        fetchPlants(); // Refresh after delete
      } catch (err) {
        console.error("Failed to delete plant:", err.message);
        if (err.response && err.response.status === 403) {
          alert("You are not authorized to delete this plant.");
        } else {
          alert("Failed to delete plant.");
        }
      
      }
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
            <Link to={`/plant/update/${plant._id}`} className="flex-1 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md text-sm">
              <MdEdit className="mr-1" /> Update
            </Link>
            <button onClick={() => handleDelete(plant._id)} className="flex-1 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm">
              <MdDelete className="mr-1" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>  
  );
}
