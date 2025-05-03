import React from 'react';
import { Link } from 'react-router-dom';
import herosection2 from '../assets/vegplant.jpg'; 

export default function HeroSection2() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-green-50">
      {/* Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img 
          src={herosection2} 
          alt="Plant Tracking and Monitoring" 
          className="rounded-3xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left ml-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 leading-snug">
          Track, Monitor & Care for Your Plants 🌱
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          Stay connected with your plants by recording growth milestones, health updates, and setting personalized care reminders for watering, pruning, and repotting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link to="/home/mygarden">
            <button className="bg-green-600 text-white px-5 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300">
              Track My Garden
            </button>
          </Link>
          <Link to="/home/reminders">
            <button className="bg-green-100 text-green-700 px-5 py-3 rounded-full shadow-md hover:bg-green-200 transition duration-300">
              Set Reminders
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
