import React from "react";
import { Home, Briefcase, Users, Info, Phone, BookUser } from "lucide-react";
import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";

const SideNavBar: React.FC = () => {
  return (
    <aside className="h-screen w-64 bg-gray-100 dark:bg-gray-800 shadow-md fixed">
      <div className="flex flex-col h-full">
        <a href="/" className="flex items-center space-x-2">
          <BookUser className="h-6 w-6 ml-5 mt-5" />
          <span className="font-bold text-3xl mt-5">Pomelo</span>
        </a>
        <nav className="flex-1 mt-10">
          <ul className="space-y-5">
            <NavItem
              to="/"
              icon={<FaSearch className="h-5 w-5" />}
              label="Search"
            />
            <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Home" />

            <NavItem
              to="/screeningform"
              icon={<FaPlusSquare className="h-5 w-5" />}
              label="Screening Form"
            />

            <NavItem
              to="/clientmatterchange"
              icon={<RiUserSettingsLine className="h-5 w-5" />}
              label="C/M Changes"
            />
            <NavItem
              to="/report"
              icon={<FaBookOpen className="h-5 w-5" />}
              label="Report"
            />

            <NavItem
              to="/settings"
              icon={<IoMdSettings className="h-5 w-5" />}
              label="Settings"
            />
            <NavItem
              to="/help"
              icon={<IoMdHelpCircle className="h-5 w-5" />}
              label="Help"
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

function NavItem({
  to,
  icon,
  label,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 text-sm font-medium ${
            isActive
              ? "bg-primary text-white"
              : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
          } rounded-md`
        }
      >
        <span className="mr-3">{icon}</span>
        {label}
      </NavLink>
    </li>
  );
}

export default SideNavBar;
