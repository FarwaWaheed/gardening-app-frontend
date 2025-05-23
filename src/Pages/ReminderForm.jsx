import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';
import {addReminder,getReminders, updateReminder,deleteReminder } from '../api/reminderApis.js';
import {useNotification} from '../context/NotificationContext.jsx'

export default function ReminderForm({}) {

    const userRole = localStorage.getItem('userRole');
    const { addNotification } = useNotification();


    const { userId, plantId } = useParams();
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
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
            const response = await addReminder(userId,plantId,formData.taskType,formData.date,formData.notes);
            setSuccess(true);
            addNotification(userId, userRole, "success", 'Reminder created successfully!');
            
        } catch (error) {
            console.error('Error creating reminder:', error);
            addNotification(userId, userRole, "error", 'Failed to set Reminder');
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow px-4 py-8 w-full max-w-4xl lg:px-12 mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Add a New Reminder</h2>
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
