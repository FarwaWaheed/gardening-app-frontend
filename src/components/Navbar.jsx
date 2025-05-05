import { Link, useNavigate } from 'react-router-dom';
import { useNotification } from "../context/NotificationContext";
import navLogo from '../assets/navLogo.png';

export default function Navbar() {
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  
  const navigate = useNavigate();
  
  const { notifications } = useNotification();
  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    
    // you can clear other stored values if needed
    navigate('/login');
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 md:px-8 py-4 shadow-xl bg-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to="/home">
          <img src={navLogo} alt="Plantopia Logo" className="h-18 max-h-18 w-[180px] scale-110 object-cover" />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 flex-wrap justify-center items-center mt-4 md:mt-0">
        <Link to="/home" className="text-gray-700 hover:text-green-700">Home</Link>
        {(userRole === 'gardener' || userRole === 'home-owner') && (
          <Link to="/home/mygarden" className="text-gray-700 hover:text-green-700">My Garden</Link>
        )}
        {userRole === 'supervisor' && (
          <Link to="/home/supervisor-panel" className="text-gray-700 hover:text-green-700">Supervisor Panel</Link>
        )}
        {userRole === 'admin' && (
          <Link to="/home/admin-panel" className="text-gray-700 hover:text-green-700">Admin Panel</Link>
        )}


        <Link to="/plant/suggestions" className="text-gray-700 hover:text-green-700">Plant Recommendations</Link>
        <Link to="/home/weatherUpdate" className="text-gray-700 hover:text-green-700">Weather Updates</Link>
        <Link to="/home/notifications" className="text-gray-700 hover:text-green-700">
          <div className="relative inline-block">
              Notifications
              {unreadCount > 0 && (
                <span className="absolute  -top-3 -right-3 bg-green-600 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {unreadCount}
                </span>
              )}
            </div>
        </Link>
        <Link to="/home/community" className="text-gray-700 hover:text-green-700">Join Community</Link>
      </div>

      <div className="flex gap-6">
        <Link to={`/user/updateUser/${userId}`}>
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm md:text-base">
            Update Profile
          </button>
        </Link>
        
          <button 
          onClick={handleLogout}
          className="bg-gray-200 px-3 py-1 rounded text-sm md:text-base">
            Log Out
          </button>
        
      </div>
    </nav>
  );
}
