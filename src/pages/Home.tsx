// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import SideNavBar from "@/components/SideNavBar";
// import { StatusIcon } from "../components/StatusIcon";

// export function Home() {
//   const navigate = useNavigate();

//   const worklist = [
//     {
//       request: "111111-I",
//       requestDate: "19 May, 2021 : 10:10 AM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "Good Client 2024 General Matter",
//       risk: "low", // Passed as 'low'
//       conflicts: "low", // Assuming 'none' is a valid status for conflicts
//       clientNumber: "11111",
//       matterNumber: "1111",
//       approval: "evaluation", // This could be 'approved', 'denied', or 'pending'
//     },
//     {
//       request: "222222-I",
//       requestDate: "18 May, 2021 : 3:12 PM",
//       requester: "Associate, Aaron",
//       responsibleAttorney: "Smith, John",
//       clientNameMatterName: "New Client New Matter",
//       risk: "medium", // Passed as 'medium'
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
//       risk: "high", // Passed as 'high'
//       conflicts: "high", // Assuming 'conflict' is a custom conflict status
//       clientNumber: "Pending",
//       matterNumber: "Pending",
//       approval: "evaluation",
//     },
//   ];

//   const handleFirstClick = () => {
//     navigate("/requeststatus");
//   };

//   return (
//     <div className="flex">
//       <SideNavBar />
//       <div className="flex-1 ml-64 flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-1">
//           <section
//             id="services"
//             className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
//           >
//             <div className="container px-4 md:px-6">
//               <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 <ServiceCard
//                   title="Screenings in Process"
//                   description="3"
//                   onClick={handleFirstClick}
//                 />
//                 <ServiceCard
//                   title="Intake Requests in Progress"
//                   description="17"
//                   onClick={handleFirstClick}
//                 />
//                 <ServiceCard
//                   title="New Matters"
//                   description="132"
//                   onClick={() => navigate("/report")}
//                 />
//                 <ServiceCard
//                   title="New Clients"
//                   description="60"
//                   onClick={() => navigate("/report")}
//                 />
//               </div>
//             </div>
//           </section>
//           <section
//             id="worklist"
//             className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
//           >
//             <div className="container px-4 md:px-6">
//               <div className="flex flex-col space-y-4">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                     Worklist
//                   </h2>
//                   <div className="flex space-x-2">
//                     <Button>Escalate</Button>
//                     <Button>Reject</Button>
//                     <Button>Approve</Button>
//                   </div>
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full bg-white dark:bg-gray-800">
//                     <thead>
//                       <tr>
//                         <th className="px-4 py-2">Request</th>
//                         <th className="px-4 py-2">Request Date</th>
//                         <th className="px-4 py-2">Requester</th>
//                         <th className="px-4 py-2">Responsible Attorney</th>
//                         <th className="px-4 py-2">Client Name Matter Name</th>
//                         <th className="px-4 py-2">Risk</th>
//                         <th className="px-4 py-2">Conflicts</th>
//                         <th className="px-4 py-2">Client Number</th>
//                         <th className="px-4 py-2">Matter Number</th>
//                         <th className="px-4 py-2">Approval</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {worklist.map((item, index) => (
//                         <tr key={index}>
//                           <td
//                             className="border px-4 py-2"
//                             onClick={() => navigate("/clientmatterdetails")}
//                           >
//                             {item.request}
//                           </td>
//                           <td className="border px-4 py-2">
//                             {item.requestDate}
//                           </td>
//                           <td className="border px-4 py-2">{item.requester}</td>
//                           <td className="border px-4 py-2">
//                             {item.responsibleAttorney}
//                           </td>
//                           <td className="border px-4 py-2">
//                             {item.clientNameMatterName}
//                           </td>
//                           <td className="border px-4 py-2">
//                             {/* Pass the status level as 'risk' */}
//                             <StatusIcon
//                               type="risk"
//                               level={item.risk}
//                               size={20}
//                             />
//                           </td>
//                           <td
//                             className="border px-4 py-2"
//                             onClick={() => navigate("/conflictdetails")}
//                           >
//                             {/* Pass the status level as 'conflicts' */}
//                             <StatusIcon
//                               type="conflicts"
//                               level={item.conflicts}
//                               size={20}
//                             />
//                           </td>
//                           <td className="border px-4 py-2">
//                             {item.clientNumber}
//                           </td>
//                           <td className="border px-4 py-2">
//                             {item.matterNumber}
//                           </td>
//                           <td className="border px-4 py-2">
//                             {/* Pass the status level as 'approvals' */}
//                             <StatusIcon
//                               type="approvals"
//                               level={item.approval}
//                               size={20}
//                             />
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

// function ServiceCard({
//   title,
//   description,
//   onClick,
// }: {
//   title: string;
//   description: string | number;
//   onClick?: () => void;
// }) {
//   return (
//     <Card
//       onClick={onClick}
//       className="cursor-pointer hover:bg-gray-200 transition"
//     >
//       <CardHeader>
//         <CardTitle className="flex flex-col text-2xl">{title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <CardDescription className="text-4xl">{description}</CardDescription>
//       </CardContent>
//     </Card>
//   );
// }

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
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-1 p-8">
          <div className="grid grid-cols-4 gap-6 mb-8">
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

          <div className="bg-white rounded-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">WORKLIST</h2>
              <div className="flex gap-2 mb-4">
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
              <div className="flex gap-2 mb-4">
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

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="pb-3 font-normal text-gray-600">Request</th>
                    <th className="pb-3 font-normal text-gray-600">
                      Request Date
                    </th>
                    <th className="pb-3 font-normal text-gray-600">
                      Requester
                    </th>
                    <th className="pb-3 font-normal text-gray-600">
                      Responsible Attorney
                    </th>
                    <th className="pb-3 font-normal text-gray-600">
                      Client Name Matter Name
                    </th>
                    <th className="pb-3 font-normal text-gray-600">Risk</th>
                    <th className="pb-3 font-normal text-gray-600">
                      Conflicts
                    </th>
                    <th className="pb-3 font-normal text-gray-600">
                      Client Number
                    </th>
                    <th className="pb-3 font-normal text-gray-600">
                      Matter Number
                    </th>
                    <th className="pb-3 font-normal text-gray-600">Approval</th>
                  </tr>
                </thead>
                <tbody>
                  {worklist.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td
                        className="py-4 text-blue-600 cursor-pointer"
                        onClick={() => navigate("/clientmatterdetails")}
                      >
                        {item.request}
                      </td>
                      <td
                        className="py-4"
                        onClick={() => navigate("/clientmatterdetails")}
                      >
                        {item.requestDate}
                      </td>
                      <td
                        className="py-4"
                        onClick={() => navigate("/clientmatterdetails")}
                      >
                        {item.requester}
                      </td>
                      <td
                        className="py-4"
                        onClick={() => navigate("/clientmatterdetails")}
                      >
                        {item.responsibleAttorney}
                      </td>
                      <td
                        className="py-4"
                        onClick={() => navigate("/clientmatterdetails")}
                      >
                        {item.clientNameMatterName}
                      </td>
                      <td
                        className="py-4"
                        onClick={() => navigate("/riskdetails")}
                      >
                        <StatusIcon type="risk" level={item.risk} size={24} />
                      </td>
                      <td
                        className="py-4 cursor-pointer"
                        onClick={() => navigate("/conflictdetails")}
                      >
                        <StatusIcon
                          type="conflicts"
                          level={item.conflicts}
                          size={24}
                        />
                      </td>
                      <td className="py-4">{item.clientNumber}</td>
                      <td className="py-4">{item.matterNumber}</td>
                      <td className="py-4">
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

            {/* <div className="flex items-center justify-center gap-2 mt-6">
              <PageButton>1</PageButton>
              <PageButton active>2</PageButton>
              <PageButton>3</PageButton>
              <PageButton>4</PageButton>
              <PageButton>5</PageButton>
              <span>...</span>
              <PageButton>20</PageButton>
            </div> */}
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
      <CardContent className="p-6">
        <CardTitle className="text-lg mb-4">{title}</CardTitle>
        <p className="text-4xl font-semibold">{value}</p>
      </CardContent>
    </Card>
  );
}

function TabButton({ children, active }) {
  return (
    <button
      className={`px-4 py-2 rounded flex items-center ${
        active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

function PageButton({ children, active }) {
  return (
    <button
      className={`w-8 h-8 rounded flex items-center justify-center ${
        active ? "bg-gray-800 text-white" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}

export default Home;
