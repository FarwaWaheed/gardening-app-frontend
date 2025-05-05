import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { addPlantRecord } from '../api/plantRecordsApis.js';
import BackButton from '../components/BackButton';
import FormTextInput from "../components/FormTextInput.jsx";
export default function AddPlantNote() {
    const { id} = useParams();
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
        // if (!validatePlantForm(formData, setErrors)) return;
        setLoading(true);
        try {
            const response = await addPlantRecord(userId, id,formData.image, formData.height, formData.notes);
            console.log('Plant record saved:', response);
            alert('Plant record added successfully!');
            navigate(`/home/${id}/allNotes`);
        } catch (error) {
            console.error('Error saving plant record:', error);
        } finally {
            setLoading(false);

        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow px-4 py-8 w-full max-w-4xl lg:px-12 mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Add a New Plant Record</h2>
                <BackButton/>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">

                    <FormTextInput label="Height (in cm)" name="height" value={formData.height} onChange={handleChange}
                                   error={errors.height}/>
                    <FormTextInput label="Observations" name="notes" value={formData.notes} onChange={handleChange}
                                   error={errors.notes}/>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                    </div>
                    {/*<FormTextInput label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} error={errors.imageUrl} />*/}
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
