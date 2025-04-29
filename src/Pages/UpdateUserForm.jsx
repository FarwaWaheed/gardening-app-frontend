import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById, updateUser } from '../api/userApis'; // you'll need to define getUserById too
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

export default function UpdateUserForm() {
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(id);
        setFormData({
          name: user.name,
          email: user.email,
          role: user.role,
          password: '', // keep password empty until user changes it
        });
      } catch (err) {
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      alert('User updated successfully!');
      
    } catch (err) {
      console.error('Error updating user:', err);
      if (err.response && err.response.status === 403) {
        alert("You are not authorized to update this user.");
      } else {
        alert("Failed to update user.");
      }
    }
  };

 

  if (loading) return <p className="text-center py-20">Loading user data...</p>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4 py-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Update User</h2>
        <BackButton/>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>

          

          <div>
            <label className="block text-sm font-medium">Password (Leave empty to keep unchanged)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
          >
            Update User
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
