// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import SideNavBar from "@/components/SideNavBar";
// import { StatusIcon } from "../components/StatusIcon";
// import { Bell } from "lucide-react";

// export function Home() {
//   const navigate = useNavigate();

//   const worklist = [
//     {
//       request: "111111-I",
//       requestDate: "19 May, 2021 : 10:10 AM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "Good Client 2024 General Matter",
//       risk: "low",
//       conflicts: "low",
//       clientNumber: "11111",
//       matterNumber: "1111",
//       approval: "evaluation",
//     },
//     {
//       request: "222222-I",
//       requestDate: "18 May, 2021 : 3:12 PM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "New Client New Matter",
//       risk: "medium",
//       conflicts: "medium",
//       clientNumber: "Pending",
//       matterNumber: "Pending",
//       approval: "evaluation",
//     },
//     {
//       request: "333333-I",
//       requestDate: "17 May, 2021 : 2:15 PM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "Denied Client General Matter",
//       risk: "high",
//       conflicts: "high",
//       clientNumber: "Pending",
//       matterNumber: "Pending",
//       approval: "evaluation",
//     },
//   ];

//   return (
//     <div className="flex">
//       <SideNavBar />
//       <div className="flex-1 ml-64 flex flex-col min-h-screen bg-gray-100">
//         <Header />
//         <main className="flex-1 p-8">
//           <div className="grid grid-cols-4 gap-6 mb-8">
//             <MetricCard
//               title="Screenings in Progress"
//               value="3"
//               variant="dark"
//               onClick={() => navigate("/requeststatus")}
//             />
//             <MetricCard
//               title="Intake Requests in Progress"
//               value="17"
//               onClick={() => navigate("/requeststatus")}
//             />
//             <MetricCard
//               title="New Matters"
//               value="132"
//               onClick={() => navigate("/report")}
//             />
//             <MetricCard
//               title="New Clients"
//               value="60"
//               onClick={() => navigate("/report")}
//             />
//           </div>

//           <div className="bg-white rounded-lg p-6">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4">WORKLIST</h2>
//               <div className="flex gap-2 mb-4">
//                 <Button variant="outline" className="bg-gray-100">
//                   ESCALATE
//                 </Button>
//                 <Button variant="outline" className="bg-gray-100">
//                   REJECT
//                 </Button>
//                 <Button variant="outline" className="bg-gray-100">
//                   APPROVE
//                 </Button>
//               </div>
//               <div className="flex gap-2 mb-4">
//                 <TabButton active>
//                   Approvals
//                   <Bell className="w-4 h-4 ml-1" />
//                 </TabButton>
//                 <TabButton>
//                   Conflicts
//                   <Bell className="w-4 h-4 ml-1" />
//                 </TabButton>
//                 <TabButton>Risk</TabButton>
//                 <TabButton>Intake</TabButton>
//                 <TabButton>Screenings</TabButton>
//               </div>
//             </div>

//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left">
//                     <th className="pb-3 font-normal text-gray-600">Request</th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Request Date
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Requester
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Responsible Attorney
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Client Name Matter Name
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">Risk</th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Conflicts
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Client Number
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">
//                       Matter Number
//                     </th>
//                     <th className="pb-3 font-normal text-gray-600">Approval</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {worklist.map((item, index) => (
//                     <tr key={index} className="border-t">
//                       <td
//                         className="py-4 text-blue-600 cursor-pointer"
//                         onClick={() => navigate("/clientmatterdetails")}
//                       >
//                         {item.request}
//                       </td>
//                       <td
//                         className="py-4"
//                         onClick={() => navigate("/clientmatterdetails")}
//                       >
//                         {item.requestDate}
//                       </td>
//                       <td
//                         className="py-4"
//                         onClick={() => navigate("/clientmatterdetails")}
//                       >
//                         {item.requester}
//                       </td>
//                       <td
//                         className="py-4"
//                         onClick={() => navigate("/clientmatterdetails")}
//                       >
//                         {item.responsibleAttorney}
//                       </td>
//                       <td
//                         className="py-4"
//                         onClick={() => navigate("/clientmatterdetails")}
//                       >
//                         {item.clientNameMatterName}
//                       </td>
//                       <td
//                         className="py-4"
//                         onClick={() => navigate("/riskdetails")}
//                       >
//                         <StatusIcon type="risk" level={item.risk} size={24} />
//                       </td>
//                       <td
//                         className="py-4 cursor-pointer"
//                         onClick={() => navigate("/conflictdetails")}
//                       >
//                         <StatusIcon
//                           type="conflicts"
//                           level={item.conflicts}
//                           size={24}
//                         />
//                       </td>
//                       <td className="py-4">{item.clientNumber}</td>
//                       <td className="py-4">{item.matterNumber}</td>
//                       <td className="py-4">
//                         <StatusIcon
//                           type="approvals"
//                           level={item.approval}
//                           size={24}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* <div className="flex items-center justify-center gap-2 mt-6">
//               <PageButton>1</PageButton>
//               <PageButton active>2</PageButton>
//               <PageButton>3</PageButton>
//               <PageButton>4</PageButton>
//               <PageButton>5</PageButton>
//               <span>...</span>
//               <PageButton>20</PageButton>
//             </div> */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function MetricCard({ title, value, variant = "light", onClick }) {
//   return (
//     <Card
//       onClick={onClick}
//       className={`cursor-pointer transition-colors ${
//         variant === "dark"
//           ? "bg-gray-800 text-white"
//           : "bg-white hover:bg-gray-50"
//       }`}
//     >
//       <CardContent className="p-6">
//         <CardTitle className="text-lg mb-4">{title}</CardTitle>
//         <p className="text-4xl font-semibold">{value}</p>
//       </CardContent>
//     </Card>
//   );
// }

// function TabButton({ children, active }) {
//   return (
//     <button
//       className={`px-4 py-2 rounded flex items-center ${
//         active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// function PageButton({ children, active }) {
//   return (
//     <button
//       className={`w-8 h-8 rounded flex items-center justify-center ${
//         active ? "bg-gray-800 text-white" : "hover:bg-gray-100"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import SideNavBar from "@/components/SideNavBar";
// import { StatusIcon } from "../components/StatusIcon";
// import { Bell, Menu, X } from 'lucide-react';

// export function Home() {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const worklist = [
//     {
//       request: "111111-I",
//       requestDate: "19 May, 2021 : 10:10 AM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "Good Client 2024 General Matter",
//       risk: "low",
//       conflicts: "low",
//       clientNumber: "11111",
//       matterNumber: "1111",
//       approval: "evaluation",
//     },
//     {
//       request: "222222-I",
//       requestDate: "18 May, 2021 : 3:12 PM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "New Client New Matter",
//       risk: "medium",
//       conflicts: "medium",
//       clientNumber: "Pending",
//       matterNumber: "Pending",
//       approval: "evaluation",
//     },
//     {
//       request: "333333-I",
//       requestDate: "17 May, 2021 : 2:15 PM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "Denied Client General Matter",
//       risk: "high",
//       conflicts: "high",
//       clientNumber: "Pending",
//       matterNumber: "Pending",
//       approval: "evaluation",
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Mobile Menu Button */}
//       <button
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded"
//         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//       >
//         {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`lg:block fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out
//           ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
//       >
//         <SideNavBar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-1 p-4 sm:p-6 lg:p-8">
//           {/* Metric Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//             <MetricCard
//               title="Screenings in Progress"
//               value="3"
//               variant="dark"
//               onClick={() => navigate("/requeststatus")}
//             />
//             <MetricCard
//               title="Intake Requests in Progress"
//               value="17"
//               onClick={() => navigate("/requeststatus")}
//             />
//             <MetricCard
//               title="New Matters"
//               value="132"
//               onClick={() => navigate("/report")}
//             />
//             <MetricCard
//               title="New Clients"
//               value="60"
//               onClick={() => navigate("/report")}
//             />
//           </div>

//           {/* Worklist Section */}
//           <div className="bg-white rounded-lg p-4 sm:p-6">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4">WORKLIST</h2>

//               {/* Action Buttons */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <Button variant="outline" className="bg-gray-100">
//                   ESCALATE
//                 </Button>
//                 <Button variant="outline" className="bg-gray-100">
//                   REJECT
//                 </Button>
//                 <Button variant="outline" className="bg-gray-100">
//                   APPROVE
//                 </Button>
//               </div>

//               {/* Tab Buttons */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <TabButton active>
//                   Approvals
//                   <Bell className="w-4 h-4 ml-1" />
//                 </TabButton>
//                 <TabButton>
//                   Conflicts
//                   <Bell className="w-4 h-4 ml-1" />
//                 </TabButton>
//                 <TabButton>Risk</TabButton>
//                 <TabButton>Intake</TabButton>
//                 <TabButton>Screenings</TabButton>
//               </div>
//             </div>

//             {/* Responsive Table */}
//             <div className="overflow-x-auto -mx-4 sm:-mx-6">
//               <div className="inline-block min-w-full align-middle">
//                 <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
//                   <table className="min-w-full divide-y divide-gray-300">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
//                           Request
//                         </th>
//                         <th className="hidden sm:table-cell px-3 py-3 text-left text-sm font-semibold text-gray-900">
//                           Request Date
//                         </th>
//                         <th className="hidden md:table-cell px-3 py-3 text-left text-sm font-semibold text-gray-900">
//                           Requester
//                         </th>
//                         <th className="hidden lg:table-cell px-3 py-3 text-left text-sm font-semibold text-gray-900">
//                           Responsible Attorney
//                         </th>
//                         <th className="px-3 py-3 text-left text-sm font-semibold text-gray-900">
//                           Client Name Matter Name
//                         </th>
//                         <th className="px-3 py-3 text-center text-sm font-semibold text-gray-900">
//                           Status
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 bg-white">
//                       {worklist.map((item, index) => (
//                         <tr
//                           key={index}
//                           onClick={() => navigate("/clientmatterdetails")}
//                           className="cursor-pointer hover:bg-gray-50"
//                         >
//                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-blue-600 sm:pl-6">
//                             {item.request}
//                           </td>
//                           <td className="hidden sm:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {item.requestDate}
//                           </td>
//                           <td className="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {item.requester}
//                           </td>
//                           <td className="hidden lg:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {item.responsibleAttorney}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                             {item.clientNameMatterName}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm text-center">
//                             <div className="flex justify-center gap-2">
//                               <StatusIcon type="risk" level={item.risk} size={24} />
//                               <StatusIcon type="conflicts" level={item.conflicts} size={24} />
//                               <StatusIcon type="approvals" level={item.approval} size={24} />
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function MetricCard({ title, value, variant = "light", onClick }) {
//   return (
//     <Card
//       onClick={onClick}
//       className={`cursor-pointer transition-colors ${
//         variant === "dark"
//           ? "bg-gray-800 text-white"
//           : "bg-white hover:bg-gray-50"
//       }`}
//     >
//       <CardContent className="p-4">
//         <CardTitle className="text-base mb-2">{title}</CardTitle>
//         <p className="text-2xl font-semibold">{value}</p>
//       </CardContent>
//     </Card>
//   );
// }

// function TabButton({ children, active }) {
//   return (
//     <button
//       className={`px-3 py-2 rounded flex items-center text-sm ${
//         active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
//       }`}
//     >
//       {children}
//     </button>
//   );
// }

// export default Home;

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideNavBar from "@/components/SideNavBar";
import { StatusIcon } from "../components/StatusIcon";
import { Bell } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const worklist = [
    {
      request: "111111-I",
      requestDate: "19 May, 2021 : 10:10 AM",
      requester: "Associate, Aaron",
      responsibleAttorney: "Smith, John",
      clientNameMatterName: "Good Client 2024 General Matter",
      risk: "low",
      conflicts: "low",
      clientNumber: "11111",
      matterNumber: "1111",
      approval: "evaluation",
    },
    {
      request: "222222-I",
      requestDate: "18 May, 2021 : 3:12 PM",
      requester: "Associate, Aaron",
      responsibleAttorney: "Smith, John",
      clientNameMatterName: "New Client New Matter",
      risk: "medium",
      conflicts: "medium",
      clientNumber: "Pending",
      matterNumber: "Pending",
      approval: "evaluation",
    },
    {
      request: "333333-I",
      requestDate: "17 May, 2021 : 2:15 PM",
      requester: "Associate, Aaron",
      responsibleAttorney: "Smith, John",
      clientNameMatterName: "Denied Client General Matter",
      risk: "high",
      conflicts: "high",
      clientNumber: "Pending",
      matterNumber: "Pending",
      approval: "evaluation",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed positioning for SideNavBar with proper z-index */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {" "}
        {/* Added ml-64 for sidebar width */}
        <Header className="z-30" />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <MetricCard
              title="Screenings in Progress"
              value="3"
              variant="dark"
              onClick={() => navigate("/requeststatus")}
            />
            <MetricCard
              title="Intake Requests in Progress"
              value="17"
              onClick={() => navigate("/requeststatus")}
            />
            <MetricCard
              title="New Matters"
              value="132"
              onClick={() => navigate("/report")}
            />
            <MetricCard
              title="New Clients"
              value="60"
              onClick={() => navigate("/report")}
            />
          </div>

          <div className="bg-white rounded-lg p-4 sm:p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">WORKLIST</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Button variant="outline" className="bg-gray-100">
                  ESCALATE
                </Button>
                <Button variant="outline" className="bg-gray-100">
                  REJECT
                </Button>
                <Button variant="outline" className="bg-gray-100">
                  APPROVE
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <TabButton active>
                  Approvals
                  <Bell className="w-4 h-4 ml-1" />
                </TabButton>
                <TabButton>
                  Conflicts
                  <Bell className="w-4 h-4 ml-1" />
                </TabButton>
                <TabButton>Risk</TabButton>
                <TabButton>Intake</TabButton>
                <TabButton>Screenings</TabButton>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:-mx-6">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Request
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Request Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Requester
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Responsible Attorney
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Client Name Matter Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Risk
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Conflicts
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Client Number
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Matter Number
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Approval
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {worklist.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-600 sm:pl-6 cursor-pointer"
                            onClick={() => navigate("/clientmatterdetails")}
                          >
                            {item.request}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.requestDate}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.requester}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.responsibleAttorney}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.clientNameMatterName}
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer"
                            onClick={() => navigate("/riskdetails")}
                          >
                            <StatusIcon
                              type="risk"
                              level={item.risk}
                              size={24}
                            />
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer"
                            onClick={() => navigate("/conflictdetails")}
                          >
                            <StatusIcon
                              type="conflicts"
                              level={item.conflicts}
                              size={24}
                            />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.clientNumber}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.matterNumber}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <StatusIcon
                              type="approvals"
                              level={item.approval}
                              size={24}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function MetricCard({ title, value, variant = "light", onClick }) {
  return (
    <Card
      onClick={onClick}
      className={`cursor-pointer transition-colors ${
        variant === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <CardContent className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg mb-2 sm:mb-4">
          {title}
        </CardTitle>
        <p className="text-2xl sm:text-4xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}

function TabButton({ children, active }) {
  return (
    <button
      className={`px-3 sm:px-4 py-2 rounded flex items-center text-sm sm:text-base ${
        active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

export default Home;
