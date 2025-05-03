import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

export default function ReminderForm({ userId, plantId }) {
    const { userId, plantId } = useParams();
    const [formData, setFormData] = useState({
        taskType: '',
        date: new Date(),
        notes: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`/api/reminders/${userId}/${plantId}`, formData);
            setSuccess(true);
            alert('Reminder created successfully!');
        } catch (error) {
            console.error('Error creating reminder:', error);
            alert('Failed to create reminder.');
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
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-green-700">Set a Plant Reminder</h2>

            <div>
                <label className="block text-sm font-medium text-gray-700">Task Type</label>
                <select
                    name="taskType"
                    value={formData.taskType}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                    required
                >
                    <option value="">Select task</option>
                    <option value="watering">Watering</option>
                    <option value="repotting">Repotting</option>
                    <option value="pruning">Pruning</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Reminder Date</label>
                <DatePicker
                    selected={formData.date}
                    onChange={(date) => setFormData(prev => ({ ...prev, date }))}
                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                    showTimeSelect
                    dateFormat="Pp"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 p-2 rounded-md"
                    rows={3}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
                {loading ? "Saving..." : "Create Reminder"}
            </button>
        </form>
    <Footer />
    </main>
    </div>
    );
}
