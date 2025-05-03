import React from 'react';
import CommunityBannerImg from '../assets/community.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ValueBanner1() {
  return (
    <section className="relative  py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }} 
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-green-800 mb-6 leading-tight">
            Grow Together in Our Community Forum 🌿
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Connect with fellow plant enthusiasts, share your gardening journey, seek advice, and celebrate your green victories. Our community is here to inspire and support you every step of the way.
          </p>
          <ul className="space-y-3 text-gray-800 font-medium">
            <li>✅ Join Plant Groups</li>
            <li>✅ Share Photos & Tips</li>
            <li>✅ Get Expert Advice</li>
            <li>✅ Discover Trending Discussions</li>
            <li>✅ Join Facebook and WhatsApp Groups</li>
          </ul>
          <Link to="/home/community">
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-700 transition">
              Visit Community 🌸
            </button>
          </Link>
        </motion.div>

        {/* Image Side */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src={CommunityBannerImg}
            alt="Community Forum"
            className="object-cover w-full h-96 transform group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 "></div>
          <h2 className="absolute bottom-6 left-6 text-3xl text-white font-extrabold drop-shadow-lg tracking-wide">
            🌸 Plantopia Community
          </h2>
        </div>
      </div>
    </section>
  );
}
