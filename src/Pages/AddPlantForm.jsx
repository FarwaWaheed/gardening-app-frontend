import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import validatePlantForm from '../utils/validatePlantForm';
import PlantForm from '../components/PlantForm';
import { addPlant } from '../api/plantApis';
import BackButton from '../components/BackButton';
import { useNotification } from '../context/NotificationContext';


export default function AddPlantForm() {
   
  const { addNotification } = useNotification();
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
    
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);  

  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    category: 'vegetable',
    climate: '',
    soil: '',
    sunlight: '',
    wateringFrequency: '',
    growthType: '',
    description: '',
    imageUrl: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePlantForm(formData, setErrors)) return;

    setLoading(true);
  
    try {
      const response = await addPlant(formData);
      console.log('Plant saved:', response.data);
      addNotification(userId, userRole, "success", `${formData.name} Plant added successfully!`);
      

    } catch (error) {
      console.error('Error saving plant:', error);
      addNotification(userId, userRole, "error", 'Something went wrong while saving the plant.');
      
    } finally {
        setLoading(false);
      }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-8 w-full max-w-4xl lg:px-12 mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Add a New Plant</h2>
            <BackButton/>
          <PlantForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          />
      </main>
      

      <Footer />
    </div>
  );
}
