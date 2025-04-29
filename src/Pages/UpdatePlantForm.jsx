import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPlantById, updatePlant } from '../api/plantApis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantForm from '../components/PlantForm';
import validatePlantForm from '../utils/validatePlantForm';
import BackButton from '../components/BackButton';

const UpdatePlantForm = () => {
  const {  id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        console.log(id);
        const res = await getPlantById(id);
        
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching plant:', error);
      }
    };
    fetchPlant();
  }, [id]);

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
      await updatePlant(id, formData);
      alert('Plant updated successfully!');
      
    } catch (error) {
      console.error('Error updating plant:', error);
      if (error.response && error.response.status === 403) {
        alert("You are not authorized to update this plant.");
      } else {
        alert("Failed to update plant.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!formData) return <p className="text-center py-10">Loading plant data...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 py-8 w-full max-w-4xl lg:px-12 mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Update Plant</h2>
        <BackButton/>
        <PlantForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          isUpdate={true}
        />
      </main>
      <Footer />
    </div>
  );
};

export default UpdatePlantForm;
