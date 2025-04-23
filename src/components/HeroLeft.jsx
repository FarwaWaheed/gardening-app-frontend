import {Link} from 'react-router-dom';

export default function HeroLeft() {
    return (
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Smart Gardening for Everyone – Plant, Care, Connect.
        </h1>
        <p className="text-gray-600">
          Experience the future of gardening with personalized care, smart tracking, and expert guidance.
          
        </p>
       
        <p className="text-gray-600">
        Explore our plant library and learn how to nurture your greens like a pro. </p>
        
        <Link to={'/plant/search'}>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Search & Learn!
        </button>
        </Link>
        
      </div>
    );
  }