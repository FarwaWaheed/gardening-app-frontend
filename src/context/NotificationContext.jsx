import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = async (userId) => {
    const res = await axios.get(`http://localhost:5000/notification/${userId}`);
    setNotifications(res.data);
  };

  const addNotification = async (userId, userRole, type, message) => {
    try{
      await axios.post("http://localhost:5000/notification", { userId, userRole, type, message });
      fetchNotifications(userId);
      // toast.success(`New notification: ${message}`);
      // Show different toast styles based on type
    switch (type) {
        case 'success':
          toast.success(`New notification: ${message}`);
          break;
        case 'error':
          toast.error(`New notification: ${message}`);
          break;
        case 'info':
        default:
          toast.info(`New notification: ${message}`);
          break;
      }
    } catch (error) {
      console.error("Failed to add notification:", error.message);
      toast.error("Failed to add notification");
    }
  };

  const markAllAsRead = async (userId) => {
    await axios.put(`http://localhost:5000/notification/read/${userId}`);
    fetchNotifications(userId);
  };

  const getAllNotifications = async () => {
    const res = await axios.get("http://localhost:5000/notification");
    return res.data;
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, fetchNotifications, markAllAsRead, getAllNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
