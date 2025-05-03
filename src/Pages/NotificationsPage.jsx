import { useEffect } from "react";
import { useNotification } from "../context/NotificationContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const NotificationsPage = () => {
  const { notifications, fetchNotifications, markAllAsRead } = useNotification();
  console.log("notifications from context: ", notifications);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchNotifications(userId);
  }, [userId]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
          <Navbar />
        <main className="flex-grow px-4 py-8 ">
            <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Notifications</h2>
            <button
                onClick={() => markAllAsRead(userId)}
                className="mb-4 p-2 bg-green-600 text-white rounded"
            >
                Mark all as read
            </button>
            <div className="space-y-3">
                {notifications.length === 0 && <p>No notifications yet.</p>}
                {notifications.map((n) => (
                <div key={n._id} className={`p-4 rounded shadow ${n.read ? "bg-gray-100" : "bg-green-100"}`}>
                    <div className="text-sm text-gray-500">{new Date(n.timestamp).toLocaleString()}</div>
                    <div>{n.message}</div>
                </div>
                ))}
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  );
};

export default NotificationsPage;
