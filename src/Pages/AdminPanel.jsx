import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdPeople, MdLocalFlorist, MdReport, MdSettings } from 'react-icons/md';
import ManageUsers from '../components/admin/ManageUsers';
import ManagePlants from '../components/admin/ManagePlants';
import ViewReports from '../components/admin/ViewReports';
import SystemSettings from '../components/admin/SystemSettings';
import BackButton from '../components/BackButton';

const tabs = [
  { label: 'Manage Users', icon: MdPeople, component: <ManageUsers />, description: 'View, edit, or delete users and their roles.' },
  { label: 'Manage Plants', icon: MdLocalFlorist, component: <ManagePlants />, description: 'Add, edit or remove plant records in the database.' },
  { label: 'View Reports', icon: MdReport, component: <ViewReports />, description: 'Check system logs, user activity, and issues reported.' },
  { label: 'System Settings', icon: MdSettings, component: <SystemSettings />, description: 'Control site configurations and integrations.' },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 md:px-12 py-10">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">Admin Panel</h1>
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