import { Link, useNavigate } from 'react-router-dom';
import navLogo from '../assets/navLogo.png';

export default function Navbar() {
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    // you can clear other stored values if needed
    navigate('/login');
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-xl bg-white">
      <div className="flex items-center">
        <Link to="/home">
          <img src={navLogo} alt="Plantopia Logo" className="h-18 max-h-18 w-[180px] scale-110 object-cover" />
        </Link>
      </div>

      <div className="flex gap-10">
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
        <Link to="/plant/suggestions" className="text-gray-700 hover:text-green-700">Plants Recommendations</Link>
        
        <Link to="/home/notifications" className="text-gray-700 hover:text-green-700">Notifications</Link>
        <Link to="/home/community" className="text-gray-700 hover:text-green-700">Join Community</Link>
      </div>

      <div className="flex gap-6">
        <Link to={`/user/updateUser/${userId}`}>
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded">
            Update Profile
          </button>
        </Link>
        
          <button 
          onClick={handleLogout}
          className="bg-gray-200 px-3 py-1 rounded">
            Log Out
          </button>
        
      </div>
    </nav>
  );
}
