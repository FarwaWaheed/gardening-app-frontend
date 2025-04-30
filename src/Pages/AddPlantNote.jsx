import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import validatePlantForm from '../utils/validatePlantForm';
import PlantForm from '../components/PlantForm';
import { addPlantRecord } from '../api/plantRecordsApis.js';
import BackButton from '../components/BackButton';


export default function AddPlantNote() {
    const id = useParams();
    const userId = localStorage.getItem("userId");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        height: '',
        notes: '',
        imageUrl: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData((prev) => ({
                ...prev,
                image: files[0], // store the file object
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePlantForm(formData, setErrors)) return;

        setLoading(true);

        try {
            const response = await addPlantRecord(userId, id,formData);
            console.log('Plant record saved:', response.record);
            alert('Plant record added successfully!');

        } catch (error) {
            console.error('Error saving plant record:', error);
            alert('Something went wrong while saving the plant record.');
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
