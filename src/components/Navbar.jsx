import logo from '../assets/removebg.png';

export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4  shadow-xl bg-white">
        <div className="flex items-center">
        <img src={logo} alt="Plantopia Logo" className="h-18 max-h-18 w-[180px] scale-110 object-cover"/>
        

        </div>
        <div className="flex gap-10">
          <a href="/home" className="text-gray-700 hover:text-green-700">Home</a>
          <a href="/home/my-garden" className="text-gray-700 hover:text-green-700">My Garden</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Notifications</a>
          <a href="#" className="text-gray-700 hover:text-green-700">Join Community</a>
        </div>
        <div className="flex gap-6">
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded">Update Profile</button>
          <button className="bg-gray-200 px-3 py-1 rounded">Log Out</button>
        </div>
      </nav>
    );
  }