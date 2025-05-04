import BackButton from './BackButton';

import React from 'react';

export default function ContactMe() {
  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-16">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-3xl">
        <BackButton/>
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">📬 Contact Plantopia!</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition"
          >
            Send Message 📩
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>📞 Phone: +1 234 567 8901</p>
          <p>📧 Email: contact@plantopia.com</p>
        </div>
      </div>
    </section>
  );
}
