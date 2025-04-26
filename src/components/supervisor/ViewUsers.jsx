import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api/userApis';

export default function ViewUsers() {
  const [users, setUsers] = useState([]);
  

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

  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">Check Registered Users</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user._id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700">{user.name}</h3>
            <p className="text-gray-600 text-sm">Email: {user.email}</p>
            <p className="text-gray-600 text-sm mb-4">Role: {user.role}</p>

            
          </div>
        ))}
      </div>

      {users.length === 0 && (
        <p className="text-gray-500 text-center mt-10">No users found.</p>
      )}
    </div>
  );
}
