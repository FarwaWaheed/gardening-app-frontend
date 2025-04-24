import plant from '../assets/Morefeature4.jpg';
import {Link} from 'react-router-dom';

export default function ValueBanner() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${plant})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-xl mx-auto bg-white bg-opacity-80 text-black p-10 rounded-xl shadow-xl backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
        <h3 className="text-3xl font-extrabold mb-6 text-green-800 tracking-wide">
          🌱 Bringing Gardens to Life
        </h3>
        <ul className="text-left text-lg font-medium space-y-3">
          <li>✅ Discover & Learn</li>
          <li>✅ Get Personalized Care</li>
          <li>✅ Track Your Plants</li>
          <li>✅ Join the Community</li>
          <li>✅ Plan Your Garden</li>
          <li>✅ Stay Updated</li>
        </ul>
        <Link to={'/plant/suggestions'}>
        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-800 transition">
          Get Personalized Plant Care Recommendations!
        </button>
        </Link>
      </div>
    </section>
  );
}
