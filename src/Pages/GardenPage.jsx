import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getGardenPlants } from '../api/gardenApis';
import PlantCard from '../components/PlantCard';
import { Link } from 'react-router-dom';
import ReminderCard from "../components/ReminderCard.jsx";
import {getReminders} from '../api/reminderApis.js'

export default function GardenPage() {
    const [plants, setPlants] = useState([]);
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);

    const userId = localStorage.getItem('userId');
    useEffect(() => {
        const fetchPlants  = async () => {
            try {
                const res = await getGardenPlants(userId);
                if(res.plants.length !==0 ){
                    setPlants(res.plants);
                }
                let userPlants = res.plants.map((plant)=> ({id: plant._id}));
                localStorage.setItem('plants', JSON.stringify(userPlants))
                console.log("plants: ", JSON.parse(localStorage.getItem('plants')));

                // Fetch reminders for each plant
                let allReminders = [];
                for (const plant of userPlants) {
                    const plantReminders = await getReminders(userId);
                    console.log("reminders: ",plantReminders)
                    plantReminders.data.forEach((reminder) =>
                        allReminders.push({ ...reminder, plantName: plant.name })
                    );
                }
                setReminders(allReminders);
            } catch (error) {
                console.error('Error fetching plants:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlants();
    },[] );

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-4 md:px-12 py-10">
                <h1 className="text-center text-xl font-medium text-gray-800 mb-6">My Garden!</h1>

                {/* Add New Plant Button */}
                <Link to={'/plant/search'}>
                    <div className="flex justify-center mb-8">
                        <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-green-700 transition">
                            + Add a New Plant
                        </button>
                    </div>
                </Link>

                {/* Grid of Plant Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 place-items-center">
                    {plants.map((plant) => (
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
                {/* Reminder Cards Section */}
                <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">Reminders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {reminders.map((reminder) => (
                        <ReminderCard key={reminder._id} reminder={reminder} plantName={reminder.plantName} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
