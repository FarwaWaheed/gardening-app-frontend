import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdPeople, MdLocalFlorist, MdReport, MdSettings } from 'react-icons/md';
import ViewUsers from '../components/supervisor/ViewUsers';
import ViewPlants from '../components/supervisor/ViewPlants';
import ViewReports from '../components/supervisor/ViewReports';
import BackButton from '../components/BackButton';


const tabs = [
  { label: 'View Users', icon: MdPeople, component: <ViewUsers />, description: 'View users and their roles.' },
  { label: 'View Plants', icon: MdLocalFlorist, component: <ViewPlants />, description: 'View and add new plant records in the database.' },
  { label: 'View Reports', icon: MdReport, component: <ViewReports />, description: 'Check system logs, user activity, and issues reported.' },
  
];

export default function SupervisorPanel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 md:px-12 py-10">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Supervisor Panel</h1>
        <BackButton/>

        {/* Tab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-start text-left p-6 rounded-lg shadow transition hover:shadow-lg border ${
                activeTab === index ? 'border-green-600 bg-green-50' : 'border-gray-200 bg-white'
              }`}
            >
              <tab.icon size={32} className="text-green-700 mb-3" />
              <h2 className="text-lg font-semibold mb-2">{tab.label}</h2>
              <p className="text-sm text-gray-600">{tab.description}</p>
            </button>
          ))}
        </div>

        {/* Active Tab Component */}
        <div className="bg-white p-6 rounded-lg shadow">
          {tabs[activeTab].component}
        </div>
      </main>

      <Footer />
    </div>
  );
}
