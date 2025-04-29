import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../api/userApis';
import { useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  // Delete user handler
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(userId);
        setUsers(users.filter((user) => user._id !== userId));
      } catch (err) {
        console.error("Error deleting User:", err);
        if (err.response && err.response.status === 403) {
          alert("You are not authorized to delete this user.");
        } else {
          alert("Failed to delete user.");
        }
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">Manage Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700">{user.name}</h3>
            <p className="text-gray-600 text-sm">Email: {user.email}</p>
            <p className="text-gray-600 text-sm mb-4">Role: {user.role}</p>

            <div className="flex space-x-3">
              

              <button
                onClick={() => navigate(`/user/updateUser/${user._id}`)}
                className="flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                <MdEdit className="mr-1" /> Update
              </button>

              <button
                onClick={() => handleDelete(user._id)}
                className="flex items-center px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                <MdDelete className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <p className="text-gray-500 text-center mt-10">No users found.</p>
      )}
    </div>
  );
}
