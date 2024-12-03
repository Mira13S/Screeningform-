// "use client";

// import React from "react";
// import { ChevronDown, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import SideNavBar from "@/components/SideNavBar";
// import Header from "@/components/Header";
// import { StatusIcon } from "@/components/StatusIcon";
// import { useNavigate } from "react-router-dom";

// // This would typically come from an API or state management
// const screeningsData = [
//   {
//     request: "111111-S",
//     requestDate: "19 May, 2021 : 10:10 AM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "Good Client 2024 General Matter",
//     risk: "low",
//     conflicts: "low",
//     clientNumber: "11111",
//   },
//   {
//     request: "222222-S",
//     requestDate: "18 May, 2021 : 3:12 PM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "New Client New Matter",
//     risk: "medium",
//     conflicts: "medium",
//     clientNumber: "Pending",
//   },
//   {
//     request: "333333-S",
//     requestDate: "17 May, 2021 : 2:15 PM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "Denied Client General Matter",
//     risk: "high",
//     conflicts: "high",
//     clientNumber: "Pending",
//   },
// ];

// const intakeRequestsData = [
//   {
//     request: "111111-I",
//     requestDate: "19 May, 2021 : 10:10 AM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "Good Client 2024 General Matter",
//     risk: "low",
//     conflicts: "low",
//     clientNumber: "11111",
//     matterNumber: "1111",
//     approval: "approved",
//   },
//   {
//     request: "222222-I",
//     requestDate: "18 May, 2021 : 3:12 PM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "New Client New Matter",
//     risk: "medium",
//     conflicts: "low",
//     clientNumber: "Pending",
//     matterNumber: "Pending",
//     approval: "evaluation",
//   },
//   {
//     request: "333333-I",
//     requestDate: "17 May, 2021 : 2:15 PM",
//     requester: "Associate, Aaron",
//     responsibleAttorney: "Smith, John",
//     clientNameMatterName: "Denied Client General Matter",
//     risk: "high",
//     conflicts: "high",
//     clientNumber: "N/A",
//     matterNumber: "N/A",
//     approval: "denied",
//   },
// ];
// export function RequestStatus() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Header />
//       <SideNavBar />
//       <div className="container mx-auto p-4 ml-64">
//         <h1 className="text-2xl font-bold mb-4">REQUESTS STATUS</h1>

//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-2">Screenings</h2>
//           <div className="overflow-x-auto max-h-[500px] overflow-y-auto -mx-4 sm:-mx-6">
//           <div className="hidden lg:block">
//           <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
//             <Table className="min-w-full divide-y divide-gray-300">
//               <TableHeader className="bg-gray-50 sticky top-0 z-10">
//                 <TableRow>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Request Date</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Requester</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Request</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Responsible Attorney</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Client Name Matter Name</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Risk</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Conflicts</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Client Number</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50">Action</TableHead>
//                   <TableHead scope="col"
//                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50"></TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody className="divide-y divide-gray-200 bg-white">
//                 {screeningsData.map((item) => (
//                   <TableRow key={item.request}>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.request}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.requestDate}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.requester}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.responsibleAttorney}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.clientNameMatterName}
//                     </TableCell>
//                     <TableCell>
//                       <StatusIcon type="risk" level={item.risk} size={24} />
//                     </TableCell>
//                     <TableCell>
//                       <StatusIcon
//                         type="conflicts"
//                         level={item.conflicts}
//                         size={24}
//                       />
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/screeningform")}>
//                       {item.clientNumber}
//                     </TableCell>
//                     <TableCell>
//                       <Button
//                         variant="outline"
//                         onClick={() => navigate("/intake")}
//                       >
//                         {item.risk === "high"
//                           ? "Complete Intake"
//                           : "Start Intake"}
//                       </Button>
//                     </TableCell>
//                     <TableCell>
//                       <Button variant="ghost" size="icon">
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//         <div className="lg:hidden">
//                 <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
//                   <table className="min-w-full divide-y divide-gray-300">
//                     <tbody className="divide-y divide-gray-200">
//                       {Object.keys(screeningsData[0]).map((key) => (
//                         <tr key={key} className="hover:bg-gray-50">
//                           <th
//                             scope="row"
//                             className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
//                           >
//                             {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//                           </th>
//                           {screeningsData.map((item, index) => (
//                             <td
//                               key={index}
//                               className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap"
//                               onClick={() => {
//                                 if (['request'].includes(key)) navigate("/clientmatterdetails");
//                                 if (['risk'].includes(key)) navigate("/riskdetails");
//                                 if (['conflicts'].includes(key)) navigate("/conflictdetails");
//                               }}
//                             >
//                               {key === 'risk' ? (
//                                 <StatusIcon type="risk" level={item[key]} size={24} />
//                               ) : key === 'conflicts' ? (
//                                 <StatusIcon type="conflicts" level={item[key]} size={24} />
//                               ) : key === 'approval' ? (
//                                 <StatusIcon type="approvals" level={item[key]} size={24} />
//                               ) : (
//                                 item[key]
//                               )}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Intake Requests</h2>
//           <div className="overflow-x-auto border border-gray-300 rounded-lg">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Request</TableHead>
//                   <TableHead>Request Date</TableHead>
//                   <TableHead>Requester</TableHead>
//                   <TableHead>Responsible Attorney</TableHead>
//                   <TableHead>Client Name Matter Name</TableHead>
//                   <TableHead>Risk</TableHead>
//                   <TableHead>Conflicts</TableHead>
//                   <TableHead>Client Number</TableHead>
//                   <TableHead>Matter Number</TableHead>
//                   <TableHead>Approval</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {intakeRequestsData.map((item) => (
//                   <TableRow key={item.request}>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.request}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.requestDate}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.requester}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.responsibleAttorney}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.clientNameMatterName}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/riskdetails")}>
//                       <StatusIcon type="risk" level={item.risk} size={24} />
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/conflictdetails")}>
//                       <StatusIcon
//                         type="conflicts"
//                         level={item.conflicts}
//                         size={24}
//                       />
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.clientNumber}
//                     </TableCell>
//                     <TableCell onClick={() => navigate("/clientmatterdetails")}>
//                       {item.matterNumber}
//                     </TableCell>
//                     <TableCell>
//                       <StatusIcon
//                         type="approvals"
//                         level={item.approval}
//                         size={24}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import { ChevronDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { StatusIcon } from "@/components/StatusIcon";
import { useNavigate } from "react-router-dom";

// This would typically come from an API or state management
const screeningsData = [
  {
    request: "111111-S",
    requestDate: "19 May, 2021 : 10:10 AM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Good Client 2024 General Matter",
    risk: "low",
    conflicts: "low",
    clientNumber: "11111",
  },
  {
    request: "222222-S",
    requestDate: "18 May, 2021 : 3:12 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "New Client New Matter",
    risk: "medium",
    conflicts: "medium",
    clientNumber: "Pending",
  },
  {
    request: "333333-S",
    requestDate: "17 May, 2021 : 2:15 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Denied Client General Matter",
    risk: "high",
    conflicts: "high",
    clientNumber: "Pending",
  },
];

const intakeRequestsData = [
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
    approval: "approved",
  },
  {
    request: "222222-I",
    requestDate: "18 May, 2021 : 3:12 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "New Client New Matter",
    risk: "medium",
    conflicts: "low",
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
    clientNumber: "N/A",
    matterNumber: "N/A",
    approval: "denied",
  },
];

export function RequestStatus() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header className="z-30 sticky top-0 bg-white shadow-sm" />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">REQUESTS STATUS</h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Screenings</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto -mx-4 sm:-mx-6">
                {/* Desktop Table */}
                <div className="hidden lg:block">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <Table className="min-w-full divide-y divide-gray-300">
                      <TableHeader className="bg-gray-50 sticky top-0 z-10">
                        <TableRow>
                          {[
                            "Request",
                            "Request Date",
                            "Requester",
                            "Responsible Attorney",
                            "Client Name Matter Name",
                            "Risk",
                            "Conflicts",
                            "Client Number",
                            "Action",
                            "",
                          ].map((header) => (
                            <TableHead
                              key={header}
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50"
                            >
                              {header}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y divide-gray-200 bg-white">
                        {screeningsData.map((item) => (
                          <TableRow
                            key={item.request}
                            className="hover:bg-gray-50"
                          >
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.request}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.requestDate}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.requester}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.responsibleAttorney}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.clientNameMatterName}
                            </TableCell>
                            <TableCell>
                              <StatusIcon
                                type="risk"
                                level={item.risk}
                                size={24}
                              />
                            </TableCell>
                            <TableCell>
                              <StatusIcon
                                type="conflicts"
                                level={item.conflicts}
                                size={24}
                              />
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/screeningform")}
                            >
                              {item.clientNumber}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                onClick={() => navigate("/intake")}
                              >
                                {item.risk === "high"
                                  ? "Complete Intake"
                                  : "Start Intake"}
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Mobile Table */}
                <div className="lg:hidden">
                  <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                      <tbody className="divide-y divide-gray-200">
                        {Object.keys(screeningsData[0]).map((key) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <th
                              scope="row"
                              className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
                            >
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </th>
                            {screeningsData.map((item, index) => (
                              <td
                                key={index}
                                className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap"
                                onClick={() => {
                                  if (["request"].includes(key))
                                    navigate("/screeningform");
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
                                  />
                                ) : key === "conflicts" ? (
                                  <StatusIcon
                                    type="conflicts"
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
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Intake Requests</h2>
            <div className="bg-white rounded-lg p-4 sm:p-6">
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto -mx-4 sm:-mx-6">
                {/* Desktop Table */}
                <div className="hidden lg:block">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <Table className="min-w-full divide-y divide-gray-300">
                      <TableHeader className="bg-gray-50 sticky top-0 z-10">
                        <TableRow>
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
                            <TableHead
                              key={header}
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 bg-gray-50"
                            >
                              {header}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody className="divide-y divide-gray-200 bg-white">
                        {intakeRequestsData.map((item) => (
                          <TableRow
                            key={item.request}
                            className="hover:bg-gray-50"
                          >
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.request}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.requestDate}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.requester}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.responsibleAttorney}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.clientNameMatterName}
                            </TableCell>
                            <TableCell onClick={() => navigate("/riskdetails")}>
                              <StatusIcon
                                type="risk"
                                level={item.risk}
                                size={24}
                              />
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/conflictdetails")}
                            >
                              <StatusIcon
                                type="conflicts"
                                level={item.conflicts}
                                size={24}
                              />
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.clientNumber}
                            </TableCell>
                            <TableCell
                              onClick={() => navigate("/clientmatterdetails")}
                            >
                              {item.matterNumber}
                            </TableCell>
                            <TableCell>
                              <StatusIcon
                                type="approvals"
                                level={item.approval}
                                size={24}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Mobile Table */}
                <div className="lg:hidden">
                  <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="min-w-full divide-y divide-gray-300">
                      <tbody className="divide-y divide-gray-200">
                        {Object.keys(intakeRequestsData[0]).map((key) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <th
                              scope="row"
                              className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
                            >
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </th>
                            {intakeRequestsData.map((item, index) => (
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
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
