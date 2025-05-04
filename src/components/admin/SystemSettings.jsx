import React from "react";

const SystemSettings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">⚙️ System Settings</h2>

      <div className="space-y-6">
        {/* App Configuration */}
        <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
          <h3 className="text-xl font-medium mb-4">🌿 Application Configuration</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Enable Maintenance Mode</span>
              <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm">
                Toggle
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Allow New User Registrations</span>
              <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm">
                Toggle
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
          <h3 className="text-xl font-medium mb-4">🔔 Notification Settings</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Email Notifications</span>
              <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm">
                Toggle
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Push Notifications</span>
              <button className="px-4 py-1 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm">
                Toggle
              </button>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white rounded-xl shadow p-5 border border-gray-200">
          <h3 className="text-xl font-medium mb-4">📊 System Information</h3>
          <ul className="text-gray-700 space-y-1">
            <li>🌱 Plantopia Version: 1.0.0</li>
            <li>🖥️ Server Status: Online</li>
            <li>🕒 Last Backup: 2025-05-03 23:45</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
