// // import React from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardTitle } from "@/components/ui/card";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../components/Header";
// // import SideNavBar from "@/components/SideNavBar";
// // import { StatusIcon } from "../components/StatusIcon";
// // import { Bell } from "lucide-react";

// // export function Home() {
// //   const navigate = useNavigate();

// //   const worklist = [
// //     {
// //       request: "111111-I",
// //       requestDate: "19 May, 2021 : 10:10 AM",
// //       requester: "Associate, Aaron",
// //       responsibleAttorney: "Smith, John",
// //       clientNameMatterName: "Good Client 2024 General Matter",
// //       risk: "low",
// //       conflicts: "low",
// //       clientNumber: "11111",
// //       matterNumber: "1111",
// //       approval: "evaluation",
// //     },
// //     {
// //       request: "222222-I",
// //       requestDate: "18 May, 2021 : 3:12 PM",
// //       requester: "Associate, Aaron",
// //       responsibleAttorney: "Smith, John",
// //       clientNameMatterName: "New Client New Matter",
// //       risk: "medium",
// //       conflicts: "medium",
// //       clientNumber: "Pending",
// //       matterNumber: "Pending",
// //       approval: "evaluation",
// //     },
// //     {
// //       request: "333333-I",
// //       requestDate: "17 May, 2021 : 2:15 PM",
// //       requester: "Associate, Aaron",
// //       responsibleAttorney: "Smith, John",
// //       clientNameMatterName: "Denied Client General Matter",
// //       risk: "high",
// //       conflicts: "high",
// //       clientNumber: "Pending",
// //       matterNumber: "Pending",
// //       approval: "evaluation",
// //     },
// //   ];

// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       {/* Fixed positioning for SideNavBar with proper z-index */}
// //       <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
// //         <SideNavBar />
// //       </div>

// //       {/* Main content with proper margin to prevent navbar overlap */}
// //       <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
// //         {" "}
// //         {/* Added ml-64 for sidebar width */}
// //         <Header className="z-30" />
// //         <main className="flex-1 p-4 sm:p-6 lg:p-8">
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
// //             <MetricCard
// //               title="Screenings in Progress"
// //               value="3"
// //               variant="dark"
// //               onClick={() => navigate("/requeststatus")}
// //             />
// //             <MetricCard
// //               title="Intake Requests in Progress"
// //               value="17"
// //               onClick={() => navigate("/requeststatus")}
// //             />
// //             <MetricCard
// //               title="New Matters"
// //               value="132"
// //               onClick={() => navigate("/report")}
// //             />
// //             <MetricCard
// //               title="New Clients"
// //               value="60"
// //               onClick={() => navigate("/report")}
// //             />
// //           </div>

// //           <div className="bg-white rounded-lg p-4 sm:p-6">
// //             <div className="mb-6">
// //               <h2 className="text-xl font-semibold mb-4">WORKLIST</h2>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 <Button variant="outline" className="bg-gray-100">
// //                   ESCALATE
// //                 </Button>
// //                 <Button variant="outline" className="bg-gray-100">
// //                   REJECT
// //                 </Button>
// //                 <Button variant="outline" className="bg-gray-100">
// //                   APPROVE
// //                 </Button>
// //               </div>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 <TabButton active>
// //                   Approvals
// //                   <Bell className="w-4 h-4 ml-1" />
// //                 </TabButton>
// //                 <TabButton>
// //                   Conflicts
// //                   <Bell className="w-4 h-4 ml-1" />
// //                 </TabButton>
// //                 <TabButton>Risk</TabButton>
// //                 <TabButton>Intake</TabButton>
// //                 <TabButton>Screenings</TabButton>
// //               </div>
// //             </div>

// //             <div className="overflow-x-auto -mx-4 sm:-mx-6">
// //               <div className="inline-block min-w-full align-middle">
// //                 <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
// //                   <table className="min-w-full divide-y divide-gray-300">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th
// //                           scope="col"
// //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// //                         >
// //                           Request
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Request Date
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Requester
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Responsible Attorney
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Client Name Matter Name
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Risk
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Conflicts
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Client Number
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Matter Number
// //                         </th>
// //                         <th
// //                           scope="col"
// //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                         >
// //                           Approval
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="divide-y divide-gray-200 bg-white">
// //                       {worklist.map((item, index) => (
// //                         <tr key={index} className="hover:bg-gray-50">
// //                           <td
// //                             className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-600 sm:pl-6 cursor-pointer"
// //                             onClick={() => navigate("/clientmatterdetails")}
// //                           >
// //                             {item.request}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.requestDate}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.requester}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.responsibleAttorney}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.clientNameMatterName}
// //                           </td>
// //                           <td
// //                             className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer"
// //                             onClick={() => navigate("/riskdetails")}
// //                           >
// //                             <StatusIcon
// //                               type="risk"
// //                               level={item.risk}
// //                               size={24}
// //                             />
// //                           </td>
// //                           <td
// //                             className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer"
// //                             onClick={() => navigate("/conflictdetails")}
// //                           >
// //                             <StatusIcon
// //                               type="conflicts"
// //                               level={item.conflicts}
// //                               size={24}
// //                             />
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.clientNumber}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             {item.matterNumber}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                             <StatusIcon
// //                               type="approvals"
// //                               level={item.approval}
// //                               size={24}
// //                             />
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // function MetricCard({ title, value, variant = "light", onClick }) {
// //   return (
// //     <Card
// //       onClick={onClick}
// //       className={`cursor-pointer transition-colors ${
// //         variant === "dark"
// //           ? "bg-gray-800 text-white"
// //           : "bg-white hover:bg-gray-50"
// //       }`}
// //     >
// //       <CardContent className="p-4 sm:p-6">
// //         <CardTitle className="text-base sm:text-lg mb-2 sm:mb-4">
// //           {title}
// //         </CardTitle>
// //         <p className="text-2xl sm:text-4xl font-semibold">{value}</p>
// //       </CardContent>
// //     </Card>
// //   );
// // }

// // function TabButton({ children, active }) {
// //   return (
// //     <button
// //       className={`px-3 sm:px-4 py-2 rounded flex items-center text-sm sm:text-base ${
// //         active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
// //       }`}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// // export default Home;

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
    // Add more dummy data to demonstrate scrolling
    ...Array(10).fill({
      request: "444444-I",
      requestDate: "16 May, 2021 : 1:00 PM",
      requester: "Associate, Aaron",
      responsibleAttorney: "Smith, John",
      clientNameMatterName: "Additional Client Matter",
      risk: "low",
      conflicts: "low",
      clientNumber: "22222",
      matterNumber: "2222",
      approval: "evaluation",
    }),
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed positioning for SideNavBar with proper z-index */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header className="z-30 sticky top-0 bg-white shadow-sm" />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
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
            <div className="sticky top-0 bg-white z-10 mb-6">
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
              <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto">
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

            {/* Responsive Table with Scroll */}
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto -mx-4 sm:-mx-6">
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        {[
                          "Request",
                          "Request Date",
                          "Requester",
                          "Responsible Attorney",
                          "Client Name Matter Name",
                          "Risk",
                          "Conflicts",
                          "Client Number",
                          "Matter Number",
                          "Approval",
                        ].map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50"
                          >
                            {header}
                          </th>
                        ))}
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

              <div className="lg:hidden">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        {[
                          "Request",
                         
                          "Client Name Matter Name",
                         
                        ].map((header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50"
                          >
                            {header}
                          </th>
                        ))}
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
                            {item.clientNameMatterName}
                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              



              {/* Mobile Table */}
              {/* <div className="lg:hidden">
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200">
                      {Object.keys(worklist[0]).map((key) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <th
                            scope="row"
                            className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </th>
                          {worklist.map((item, index) => (
                            <td
                              key={index}
                              className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap"
                              onClick={() => {
                                if (["request"].includes(key))
                                  navigate("/clientmatterdetails");
                                if (["risk"].includes(key))
                                  navigate("/riskdetails");
                                if (["conflicts"].includes(key))
                                  navigate("/conflictdetails");
                              }}
                            >
                              {key === "risk" ? (
                                <StatusIcon
                                  type="risk"
                                  level={item[key]}
                                  size={24}
                                  onClick={() => navigate("/riskdetails")}
                                />
                              ) : key === "conflicts" ? (
                                <StatusIcon
                                  type="conflicts"
                                  level={item[key]}
                                  size={24}
                                />
                              ) : key === "approval" ? (
                                <StatusIcon
                                  type="approvals"
                                  level={item[key]}
                                  size={24}
                                />
                              ) : (
                                item[key]
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> */}
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
