import React, { useState, useEffect } from "react";
import { getAllPlantRecords } from '../api/plantRecordsApis.js';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from "../components/BackButton.jsx";
export default function PlantNotesPage() {
    const { id } = useParams();
    const [records, setRecords] = useState([]);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const userId = localStorage.getItem("userId");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRecords() {
            try {
                const res = await getAllPlantRecords(userId,id);
                setRecords(res.plantRecords);
                console.log(res.plantRecords);
            } catch (err) {
                console.error("Error fetching records:", err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchRecords();
    }, [userId, id]);

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

        if (!records) {
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
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <h1 className="text-2xl font-bold mb-6">Plant Records</h1>

                    <div className="flex justify-center mb-8">
                        <button
                            className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition">
                            + Add a New Plant Record
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {records.map(record => (
                            <div
                                key={record._id}
                                className="bg-white shadow-lg rounded-xl p-4 hover:shadow-xl transition cursor-pointer"
                                onClick={() => setSelectedRecord(record)}
                            >
                                {record.imageUrl && (
                                    <img
                                        src={record.imageUrl}
                                        alt="Plant record"
                                        className="w-full h-40 object-cover rounded-md mb-3"
                                    />
                                )}
                                <p className="text-gray-600 text-sm">{new Date(record.date).toLocaleDateString()}</p>
                                <p className="font-medium mt-1 truncate">{record.observationNote}</p>
                            </div>
                        ))}
                    </div>

                    {selectedRecord && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
                                <button
                                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                                    onClick={() => setSelectedRecord(null)}
                                >
                                    ✕
                                </button>
                                {selectedRecord.imageUrl && (
                                    <img
                                        src={selectedRecord.imageUrl}
                                        alt="Full record"
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                )}
                                <p className="text-sm text-gray-500 mb-1">
                                    {new Date(selectedRecord.date).toLocaleDateString()}
                                </p>
                                <p className="text-lg mb-4 whitespace-pre-line">{selectedRecord.observationNote}</p>
                                <button
                                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                                    onClick={() => {
                                        // Navigate to edit record page or open a form/modal
                                        console.log("Edit record:", selectedRecord._id);
                                    }}
                                >
                                    Edit Record
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer/>
        </div>
    );
}
