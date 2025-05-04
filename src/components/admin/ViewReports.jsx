import React, { useEffect, useState } from "react";
import {useNotification} from '../../context/NotificationContext';

const ViewReports = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const {  getAllNotifications } = useNotification();

  // Fetch notifications on mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getAllNotifications();
        console.log("Fetched notifications:", response);
        setNotifications(response); // assuming response.data is your notifications array
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Activity Logs</h2>

      {loading ? (
        <p className="text-gray-500">Loading notifications...</p>
      ) : notifications && notifications.length === 0 ? (
        <p className="text-gray-500">No notifications found.</p>
      ) : (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className="bg-white rounded-xl shadow p-4 border border-gray-200"
            >
              <p className="text-gray-800 font-medium">{notification.message}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>User: {notification.userId?.name}</span>
                <span>User-Role: {notification.userRole}</span>
                <span>{new Date(notification.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewReports;

    