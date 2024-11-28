// // import React, { useState } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Home, Briefcase, Users, Info, Phone, BookUser, Menu, X } from "lucide-react";
// // import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
// // import { RiUserSettingsLine } from "react-icons/ri";
// // import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

// // const SideNavBar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleNavbar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const navItems = [
// //     { to: "/search", icon: <FaSearch className="w-5 h-5 mr-3" />, label: "Search" },
// //     { to: "/", icon: <Home className="w-5 h-5 mr-3" />, label: "Home" },
// //     { to: "/screening", icon: <FaPlusSquare className="w-5 h-5 mr-3" />, label: "Screening Form" },
// //     { to: "/changes", icon: <Briefcase className="w-5 h-5 mr-3" />, label: "C/M Changes" },
// //     { to: "/report", icon: <FaBookOpen className="w-5 h-5 mr-3" />, label: "Report" },
// //     { to: "/settings", icon: <IoMdSettings className="w-5 h-5 mr-3" />, label: "Settings" },
// //     { to: "/help", icon: <IoMdHelpCircle className="w-5 h-5 mr-3" />, label: "Help" }
// //   ];

// //   return (
// //     <>
// //       {/* Mobile Toggle Button */}
// //       <button
// //         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
// //         onClick={toggleNavbar}
// //       >
// //         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //       </button>

// //       {/* Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
// //           onClick={toggleNavbar}
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg z-40 transition-transform duration-300 ease-in-out ${
// //           isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
// //         } ${
// //           isOpen ? "w-64" : "w-0 lg:w-64"
// //         }`}
// //       >
// //         {/* Logo */}
// //         <div className="p-6">
// //           <h1 className="text-2xl ml-10 font-bold text-gray-800 dark:text-white">Pomelo</h1>
// //         </div>

// //         {/* Navigation Items */}
// //         <nav className="space-y-1 px-3">
// //           {navItems.map((item) => (
// //             <NavItem
// //               key={item.to}
// //               to={item.to}
// //               icon={item.icon}
// //               label={item.label}
// //               onClick={() => {
// //                 if (window.innerWidth < 1024) {
// //                   setIsOpen(false);
// //                 }
// //               }}
// //             />
// //           ))}
// //         </nav>
// //       </div>
// //     </>
// //   );
// // };

// // const NavItem = ({
// //   to,
// //   icon,
// //   label,
// //   onClick
// // }: {
// //   to: string;
// //   icon: React.ReactNode;
// //   label: string;
// //   onClick: () => void;
// // }) => {
// //   return (
// //     <NavLink
// //       to={to}
// //       className={({ isActive }) =>
// //         `flex items-center px-4 py-2 text-sm font-medium ${
// //           isActive
// //             ? "bg-primary text-white"
// //             : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
// //         } rounded-md transition-colors duration-200`
// //       }
// //       onClick={onClick}
// //     >
// //       {icon}
// //       <span>{label}</span>
// //     </NavLink>
// //   );
// // };

// // export default SideNavBar;

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Home, Briefcase, Users, Info, Phone, BookUser, Menu, X } from "lucide-react";
// import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
// import { RiUserSettingsLine } from "react-icons/ri";
// import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

// const SideNavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { to: "/search", icon: <FaSearch className="w-5 h-5 mr-3" />, label: "Search" },
//     { to: "/", icon: <Home className="w-5 h-5 mr-3" />, label: "Home" },
//     { to: "/screening", icon: <FaPlusSquare className="w-5 h-5 mr-3" />, label: "Screening Form" },
//     { to: "/changes", icon: <Briefcase className="w-5 h-5 mr-3" />, label: "C/M Changes" },
//     { to: "/report", icon: <FaBookOpen className="w-5 h-5 mr-3" />, label: "Report" },
//     { to: "/settings", icon: <IoMdSettings className="w-5 h-5 mr-3" />, label: "Settings" },
//     { to: "/help", icon: <IoMdHelpCircle className="w-5 h-5 mr-3" />, label: "Help" }
//   ];

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
//         onClick={toggleNavbar}
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={toggleNavbar}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg z-40 transition-all duration-300 ease-in-out ${
//           (!isMobile || isOpen) ? "w-64" : "w-0"
//         } ${
//           (!isMobile || isOpen) ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {(!isMobile || isOpen) && (
//           <>
//             {/* Logo */}
//             <div className="p-6">
//               <h1 className="text-2xl ml-10 font-bold text-gray-800 dark:text-white">Pomelo</h1>
//             </div>

//             {/* Navigation Items */}
//             <nav className="space-y-1 px-3">
//               {navItems.map((item) => (
//                 <NavItem
//                   key={item.to}
//                   to={item.to}
//                   icon={item.icon}
//                   label={item.label}
//                   onClick={() => {
//                     if (window.innerWidth < 1024) {
//                       setIsOpen(false);
//                     }
//                   }}
//                 />
//               ))}
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// const NavItem = ({
//   to,
//   icon,
//   label,
//   onClick
// }: {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
//   onClick: () => void;
// }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center px-4 py-2 text-sm font-medium ${
//           isActive
//             ? "bg-primary text-white"
//             : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
//         } rounded-md transition-colors duration-200`
//       }
//       onClick={onClick}
//     >
//       {icon}
//       <span>{label}</span>
//     </NavLink>
//   );
// };

// export default SideNavBar;

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { Home, Briefcase, Users, Info, Phone, BookUser, Menu, X  } from 'lucide-react';
// import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
// import { RiUserSettingsLine } from "react-icons/ri";
// import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

// const SideNavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { to: "/search", icon: <FaSearch className="w-5 h-5 mr-3" />, label: "Search" },
//     { to: "/", icon: <Home className="w-5 h-5 mr-3" />, label: "Home" },
//     { to: "/screening", icon: <FaPlusSquare className="w-5 h-5 mr-3" />, label: "Screening Form" },
//     { to: "/changes", icon: <Briefcase className="w-5 h-5 mr-3" />, label: "C/M Changes" },
//     { to: "/report", icon: <FaBookOpen className="w-5 h-5 mr-3" />, label: "Report" },
//     { to: "/settings", icon: <IoMdSettings className="w-5 h-5 mr-3" />, label: "Settings" },
//     { to: "/help", icon: <IoMdHelpCircle className="w-5 h-5 mr-3" />, label: "Help" }
//   ];

//   return (
//     <>

//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
//         onClick={toggleNavbar}
//       >
//         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//       </button>

//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
//           onClick={toggleNavbar}
//         />
//       )}

//       <div
//         className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg z-40 transition-all duration-300 ease-in-out ${
//           (!isMobile || isOpen) ? "w-64" : "w-0"
//         } ${
//           (!isMobile || isOpen) ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {(!isMobile || isOpen) && (
//           <>

//             <div className="p-6">
//               <h1 className="text-2xl ml-10 font-bold text-gray-800 dark:text-white">Pomelo</h1>
//             </div>

//             <nav className="space-y-1 px-3">
//               {navItems.map((item) => (
//                 <NavItem
//                   key={item.to}
//                   to={item.to}
//                   icon={item.icon}
//                   label={item.label}
//                   onClick={() => {
//                     if (isMobile) {
//                       setIsOpen(false);
//                     }
//                   }}
//                 />
//               ))}
//             </nav>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// const NavItem = ({
//   to,
//   icon,
//   label,
//   onClick
// }: {
//   to: string;
//   icon: React.ReactNode;
//   label: string;
//   onClick: () => void;
// }) => {
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `flex items-center px-4 py-2 text-sm font-medium ${
//           isActive
//             ? "bg-primary text-white"
//             : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
//         } rounded-md transition-colors duration-200`
//       }
//       onClick={onClick}
//     >
//       {icon}
//       <span>{label}</span>
//     </NavLink>
//   );
// };

// export default SideNavBar;

// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Home, Briefcase, Users, Info, Phone, BookUser, Menu, X } from 'lucide-react';
// // import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
// // import { RiUserSettingsLine } from "react-icons/ri";
// // import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

// // const SideNavBar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 1024);
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const toggleNavbar = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   const navItems = [
// //     { to: "/search", icon: <FaSearch className="w-5 h-5 mr-3" />, label: "Search" },
// //     { to: "/", icon: <Home className="w-5 h-5 mr-3" />, label: "Home" },
// //     { to: "/screening", icon: <FaPlusSquare className="w-5 h-5 mr-3" />, label: "Screening Form" },
// //     { to: "/changes", icon: <Briefcase className="w-5 h-5 mr-3" />, label: "C/M Changes" },
// //     { to: "/report", icon: <FaBookOpen className="w-5 h-5 mr-3" />, label: "Report" },
// //     { to: "/settings", icon: <IoMdSettings className="w-5 h-5 mr-3" />, label: "Settings" },
// //     { to: "/help", icon: <IoMdHelpCircle className="w-5 h-5 mr-3" />, label: "Help" }
// //   ];

// //   return (
// //     <>
// //       {/* Mobile Toggle Button */}
// //       <button
// //         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
// //         onClick={toggleNavbar}
// //         aria-label="Toggle navigation menu"
// //       >
// //         {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //       </button>

// //       {/* Overlay for mobile */}
// //       {isOpen && (
// //         <div
// //           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
// //           onClick={toggleNavbar}
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg z-40 transition-all duration-300 ease-in-out ${
// //           (!isMobile || isOpen) ? "w-64" : "w-0"
// //         } ${
// //           (!isMobile || isOpen) ? "translate-x-0" : "-translate-x-full"
// //         }`}
// //       >
// //         {(!isMobile || isOpen) && (
// //           <>
// //             {/* Logo */}
// //             <div className="p-6">
// //               <h1 className="text-2xl ml-10 font-bold text-gray-800 dark:text-white">Pomelo</h1>
// //             </div>

// //             {/* Navigation Items */}
// //             <nav className="space-y-1 px-3">
// //               {navItems.map((item) => (
// //                 <NavItem
// //                   key={item.to}
// //                   to={item.to}
// //                   icon={item.icon}
// //                   label={item.label}
// //                   onClick={() => {
// //                     if (isMobile) {
// //                       setIsOpen(false);
// //                     }
// //                   }}
// //                 />
// //               ))}
// //             </nav>
// //           </>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // const NavItem = ({
// //   to,
// //   icon,
// //   label,
// //   onClick
// // }: {
// //   to: string;
// //   icon: React.ReactNode;
// //   label: string;
// //   onClick: () => void;
// // }) => {
// //   return (
// //     <NavLink
// //       to={to}
// //       className={({ isActive }) =>
// //         `flex items-center px-4 py-2 text-sm font-medium ${
// //           isActive
// //             ? "bg-primary text-white"
// //             : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
// //         } rounded-md transition-colors duration-200`
// //       }
// //       onClick={onClick}
// //     >
// //       {icon}
// //       <span>{label}</span>
// //     </NavLink>
// //   );
// // };

// // export default SideNavBar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  Info,
  Phone,
  BookUser,
  Menu,
  X,
} from "lucide-react";
import { FaSearch, FaPlusSquare, FaBookOpen } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoMdSettings, IoMdHelpCircle } from "react-icons/io";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      to: "/search",
      icon: <FaSearch className="w-5 h-5 mr-3" />,
      label: "Search",
    },
    { to: "/", icon: <Home className="w-5 h-5 mr-3" />, label: "Home" },
    {
      to: "/screeningform",
      icon: <FaPlusSquare className="w-5 h-5 mr-3" />,
      label: "Screening Form",
    },
    {
      to: "/clientmatterchanges",
      icon: <Briefcase className="w-5 h-5 mr-3" />,
      label: "C/M Changes",
    },
    {
      to: "/report",
      icon: <FaBookOpen className="w-5 h-5 mr-3" />,
      label: "Report",
    },
    {
      to: "/settings",
      icon: <IoMdSettings className="w-5 h-5 mr-3" />,
      label: "Settings",
    },
    {
      to: "/help",
      icon: <IoMdHelpCircle className="w-5 h-5 mr-3" />,
      label: "Help",
    },
  ];

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-[60] p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleNavbar}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[55]"
          onClick={toggleNavbar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg z-[58] transition-all duration-300 ease-in-out ${
          !isMobile || isOpen ? "w-64" : "w-0"
        } ${!isMobile || isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {(!isMobile || isOpen) && (
          <>
            <div className="p-6 pt-16">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                Pomelo
              </h1>
            </div>

            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => {
                    if (isMobile) {
                      setIsOpen(false);
                    }
                  }}
                />
              ))}
            </nav>
          </>
        )}
      </div>
    </>
  );
};

const NavItem = ({
  to,
  icon,
  label,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 text-sm font-medium ${
          isActive
            ? "bg-primary text-white"
            : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
        } rounded-md transition-colors duration-200`
      }
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default SideNavBar;