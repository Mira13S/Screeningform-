import React from "react";
import { User } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const SettingsPage = () => {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          {/* Settings Header */}
          <h1 className="text-lg font-semibold mb-4">SETTINGS</h1>

          {/* Navigation Buttons */}
          <div className="flex gap-2 mb-8">
            <button className="px-4 py-2 border rounded hover:bg-gray-50 bg-gray-100">
              Integrations
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Workflow Mgmt
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              User Mgmt
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Security
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Configurations
            </button>
          </div>

          {/* User Profile Section */}
          <h2 className="text-base font-semibold mb-4">USER PROFILE</h2>

          <div className="flex gap-8">
            {/* Left Column - Profile Info */}
            <div className="w-64">
              {/* Profile Image Placeholder */}
              <div className="bg-gray-100 w-full aspect-square mb-4 flex items-center justify-center">
                <User size={64} className="text-gray-400" />
              </div>

              {/* Profile Details */}
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Name</div>
                  <div className="text-sm text-gray-500">Title, Department</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Security Role</div>
                  <div className="text-sm text-gray-500">Delegates</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-sm text-gray-500">Phone</div>
                </div>
              </div>
            </div>

            {/* Right Column - Settings */}
            <div className="flex-1 border rounded-lg p-4">
              {/* Notification Settings */}
              <div className="mb-4">
                <div className="font-medium mb-2">
                  Notification Settings: Daily Digest/Immediately
                </div>
                <div className="text-sm">Email Preferences</div>
                <div className="text-sm">Select Delegates</div>
                <div className="text-sm mb-4">Default Currency</div>
              </div>

              {/* Security Settings */}
              <div>
                <div className="font-medium mb-2">Security Settings</div>
                <ul className="space-y-2 text-sm">
                  <li className="ml-4">
                    <span className="font-medium">Password Management:</span>{" "}
                    Tools for changing passwords, with indicators for password
                    strength and compliance with security policies.
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">
                      Multi-Factor Authentication (MFA):
                    </span>{" "}
                    Options to enable or disable MFA, with setup guidance.
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">Session Timeout:</span>{" "}
                    Settings to adjust session inactivity timeout periods for
                    added security.
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">Security Questions:</span>{" "}
                    Options to set or change security questions for account
                    recovery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
