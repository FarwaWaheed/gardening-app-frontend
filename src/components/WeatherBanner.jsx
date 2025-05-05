import React from 'react';
import WeatherBannerImg from '../assets/weather.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ValueBanner2() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        
        {/* Image Side */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src={WeatherBannerImg}
            alt="Weather and Gardening Tips"
            className="object-cover w-full h-96 transform group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0"></div>
          <h2 className="absolute bottom-6 left-6 text-3xl text-white font-extrabold drop-shadow-lg tracking-wide">
            🌿 Weather + Tips
          </h2>
        </div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }} 
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-green-800 mb-6 leading-tight">
            Stay One Step Ahead with Nature 🌦️
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Get real-time weather updates tailored to your location and receive expert gardening tips to keep your plants thriving through every season.
          </p>
          <ul className="space-y-3 text-gray-800 font-medium">
             <li>✅ Real-time Weather Updates</li>
            <li>✅ Daily Gardening Tips</li>
            <li>✅ Climate-based Care Suggestions</li>
            <li>✅ Weekly Weather Forecasts</li>
            <li>✅ Alerts for Extreme Weather</li>
          </ul>
          <Link to="/home/weatherUpdate">
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition">
              Explore Updates 🌱
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
