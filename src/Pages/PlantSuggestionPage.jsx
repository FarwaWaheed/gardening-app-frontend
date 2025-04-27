import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { suggestPlants } from '../api/plantApis';
import PlantCard from '../components/PlantCard';
import BackButton from '../components/BackButton';
import FertilizationPlan from '../components/FertilizationPlan';
import PestControlTips from '../components/PestControlTips';
import WateringSchedule from '../components/WateringSchedule';
import PlantConditionForm from '../components/PlantConditionForm';

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
      const res = await suggestPlants(formData);
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

      <main className="flex-grow px-4 py-10 max-w-6xl mx-auto">
        <BackButton />

        {/* Plant Condition Form */}
        <PlantConditionForm
          formData={formData}
          handleChange={handleChange}
          handleSuggest={handleSuggest}
          loading={loading}
        />

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-green-800">Suggested Plants 🌱</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
          </div>
        )}
        
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700 mt-16">Personalized Plant Care Recommendations!</h2> 
         
         <div className=" grid grid-cols-1 md:grid-cols-3  gap-6 mt-12">
           
           <div> <FertilizationPlan /></div>
           <div><WateringSchedule /></div>
           <div ><PestControlTips /></div>
         </div>
        

        </main>
          
        
        
          
      

      <Footer />
    </div>
  );
}
