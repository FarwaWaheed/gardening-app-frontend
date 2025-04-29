import React from 'react';
import { Leaf, Users } from 'lucide-react';

const CommunityWelcome = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-10 shadow-lg text-center max-w-3xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-green-200 text-green-800 p-4 rounded-full">
          <Leaf size={40} />
        </div>
        <h1 className="text-4xl font-bold text-green-900">Welcome to Plantopia Community 🌱</h1>
        <p className="text-lg text-green-800 max-w-xl">
          A space where plant lovers, home gardeners, and green enthusiasts come together to share, learn, and grow. 
          Whether you're a tropical plant addict or a veggie patch pro, Plantopia Community is your home.
        </p>
        <p className="text-green-700 font-medium text-md">
          🌸 Connect • 🌿 Share • 🍃 Grow Together
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          {/* <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded">
                Join a Group
            </button> */}
            <button
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded">
                Explore Community
            </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityWelcome;
