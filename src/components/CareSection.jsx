import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Bug, Leaf } from 'lucide-react';

export default function CareSection() {
  return (
    <section className="text-center py-16">
      <h2 className="text-2xl font-semibold mb-6">Plant Care Recommendations</h2>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">

        <Link
          to="/plant/suggestions"
          className="bg-green-100 rounded-2xl shadow-md px-8 py-6 w-64 text-center hover:scale-105 transition-transform duration-300"
        >
            <div className="flex justify-center mb-4">
            <Droplet className="h-10 w-10 text-amber-900" />
            </div>
          <h3 className="text-xl font-semibold text-green-800">Watering Schedules</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Personalized watering reminders for your plants.
          </p>
        </Link>

        <Link
          to="/plant/suggestions"
          className="bg-green-100 rounded-2xl shadow-md px-8 py-6 w-64 text-center hover:scale-105 transition-transform duration-300"
        >
            <div className="flex justify-center mb-4">
            <Bug className="h-10 w-10 text-amber-900" />
            </div>
          <h3 className="text-xl font-semibold text-green-800">Pest Control Measures</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Tips and treatments to protect your plants.
          </p>
        </Link>

        <Link
          to="/plant/suggestions"
          className="bg-green-100 rounded-2xl shadow-md px-8 py-6 w-64 text-center hover:scale-105 transition-transform duration-300"
        >
            <div className="flex justify-center mb-4">
            <Leaf className="h-10 w-10 text-amber-900" />
            </div>
          <h3 className="text-xl font-semibold text-green-800">Fertilization Plans</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Tailored fertilization advice for healthy growth.
          </p>
        </Link>

      </div>
    </section>
  );
}
