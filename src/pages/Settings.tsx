import React from "react";
import { User } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNavBar />
      <div className="flex-1 lg:ml-64">
        {" "}
        {/* Margin only on larger screens */}
        <Header />
        <div className="max-w-6xl mx-auto p-4 lg:p-6 pt-16">
          {" "}
          {/* Added pt-16 for header space */}
          {/* Settings Header */}
          <h1 className="text-lg font-semibold mb-4">SETTINGS</h1>
          {/* Navigation Buttons - Scrollable on mobile */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
            <button className="px-4 py-2 border rounded hover:bg-gray-50 bg-gray-100 whitespace-nowrap">
              Integrations
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50 whitespace-nowrap">
              Workflow Mgmt
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50 whitespace-nowrap">
              User Mgmt
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50 whitespace-nowrap">
              Security
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50 whitespace-nowrap">
              Configurations
            </button>
          </div>
          {/* User Profile Section */}
          <h2 className="text-base font-semibold mb-4">USER PROFILE</h2>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Left Column - Profile Info */}
            <div className="w-full lg:w-64">
              {/* Profile Image Placeholder */}
              <div className="bg-gray-100 w-48 lg:w-full aspect-square mb-4 flex items-center justify-center mx-auto lg:mx-0">
                <User size={64} className="text-gray-400" />
              </div>

              {/* Profile Details */}
              <div className="space-y-2 text-center lg:text-left">
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
            <div className="flex-1 border rounded-lg p-4 bg-white">
              {/* Notification Settings */}
              <div className="mb-6">
                <div className="font-medium mb-2">
                  Notification Settings: Daily Digest/Immediately
                </div>
                <div className="space-y-2">
                  <div className="text-sm">Email Preferences</div>
                  <div className="text-sm">Select Delegates</div>
                  <div className="text-sm">Default Currency</div>
                </div>
              </div>

              {/* Security Settings */}
              <div>
                <div className="font-medium mb-2">Security Settings</div>
                <ul className="space-y-4 text-sm">
                  <li className="ml-0 lg:ml-4">
                    <span className="font-medium block lg:inline">
                      Password Management:
                    </span>{" "}
                    <span className="block lg:inline mt-1 lg:mt-0">
                      Tools for changing passwords, with indicators for password
                      strength and compliance with security policies.
                    </span>
                  </li>
                  <li className="ml-0 lg:ml-4">
                    <span className="font-medium block lg:inline">
                      Multi-Factor Authentication (MFA):
                    </span>{" "}
                    <span className="block lg:inline mt-1 lg:mt-0">
                      Options to enable or disable MFA, with setup guidance.
                    </span>
                  </li>
                  <li className="ml-0 lg:ml-4">
                    <span className="font-medium block lg:inline">
                      Session Timeout:
                    </span>{" "}
                    <span className="block lg:inline mt-1 lg:mt-0">
                      Settings to adjust session inactivity timeout periods for
                      added security.
                    </span>
                  </li>
                  <li className="ml-0 lg:ml-4">
                    <span className="font-medium block lg:inline">
                      Security Questions:
                    </span>{" "}
                    <span className="block lg:inline mt-1 lg:mt-0">
                      Options to set or change security questions for account
                      recovery.
                    </span>
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
