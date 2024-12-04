//THIS IS DONE BY ME
import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import {
  AlertCircle,
  CheckCircle,
  HelpCircle,
  MoreHorizontal,
  ThumbsDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const lineData = [
  { name: "Point 1", series1: 20, series2: 30, series3: 25 },
  { name: "Point 2", series1: 40, series2: 25, series3: 35 },
  { name: "Point 3", series1: 30, series2: 35, series3: 45 },
  { name: "Point 4", series1: 45, series2: 40, series3: 30 },
];

const donutData = [
  { name: "Segment 1", value: 3 },
  { name: "Segment 2", value: 1 },
  { name: "Segment 3", value: 6 },
];

const DONUT_COLORS = ["#4CAF50", "#1B5E20", "#81C784"];

const matterData = [
  {
    request: "11111111",
    requestDate: "19 May, 2021 10:10 AM",
    requestingAttorney: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientName: "Good Client",
    matterName: "2024 General Matter",
    risk: "low",
    conflicts: "none",
    clientNumber: "11111",
    matterNumber: "1111",
    approval: "approved",
  },
  {
    request: "22222222",
    requestDate: "18 May, 2021 3:12 PM",
    requestingAttorney: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientName: "New Client",
    matterName: "New Matter",
    risk: "medium",
    conflicts: "pending",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "pending",
  },
  {
    request: "33333333",
    requestDate: "17 May, 2021 2:15 PM",
    requestingAttorney: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientName: "Denied Client",
    matterName: "General Matter",
    risk: "high",
    conflicts: "found",
    clientNumber: "N/A",
    matterNumber: "N/A",
    approval: "denied",
  },
];

type Status =
  | "low"
  | "none"
  | "approved"
  | "medium"
  | "pending"
  | "high"
  | "found"
  | "denied";

const StatusIcon: React.FC<{ status: Status }> = ({ status }) => {
  switch (status) {
    case "low":
    case "none":
    case "approved":
      return <CheckCircle className="text-green-500" size={20} />;
    case "medium":
    case "pending":
      return <AlertCircle className="text-yellow-500" size={20} />;
    case "high":
    case "found":
    case "denied":
      return <AlertCircle className="text-red-500" size={20} />;
    default:
      return <HelpCircle className="text-gray-500" size={20} />;
  }
};
interface MatterData {
  request: string;
  requestDate: string;
  requestingAttorney: string;
  responsibleAttorney: string;
  clientName: string;
  matterName: string;
  risk: string;
  conflicts: string;
  clientNumber: string;
  matterNumber: string;
  approval: string;
}

interface DataTableProps {
  data: MatterData[];
  title: string;
}

// const DataTable: React.FC<DataTableProps> = ({ data, title }) => (
//   <Card className="mt-6">
//     <CardHeader>
//       <CardTitle className="text-lg font-medium">{title}</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="px-4 py-2 text-left">Request</th>
//               <th className="px-4 py-2 text-left">Request Date</th>
//               <th className="px-4 py-2 text-left">Requesting Attorney</th>
//               <th className="px-4 py-2 text-left">Responsible Attorney</th>
//               <th className="px-4 py-2 text-left">
//                 Client Name
//                 <br />
//                 Matter Name
//               </th>
//               <th className="px-4 py-2 text-center">Risk</th>
//               <th className="px-4 py-2 text-center">Conflicts</th>
//               <th className="px-4 py-2 text-center">Client Number</th>
//               <th className="px-4 py-2 text-center">Matter Number</th>
//               <th className="px-4 py-2 text-center">Approval</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, index) => (
//               <tr key={index} className="border-b">
//                 <td className="px-4 py-2">{row.request}</td>
//                 <td className="px-4 py-2">{row.requestDate}</td>
//                 <td className="px-4 py-2">{row.requestingAttorney}</td>
//                 <td className="px-4 py-2">{row.responsibleAttorney}</td>
//                 <td className="px-4 py-2">
//                   {row.clientName}
//                   <br />
//                   {row.matterName}
//                 </td>
//                 <td className="px-4 py-2 text-center">
//                   <StatusIcon status={row.risk as Status} />
//                 </td>
//                 <td className="px-4 py-2 text-center">
//                   <StatusIcon status={row.conflicts as Status} />
//                 </td>
//                 <td className="px-4 py-2 text-center">{row.clientNumber}</td>
//                 <td className="px-4 py-2 text-center">{row.matterNumber}</td>
//                 <td className="px-4 py-2 text-center">
//                   {row.approval === "pending" ? (
//                     <MoreHorizontal
//                       className="inline text-gray-500"
//                       size={20}
//                     />
//                   ) : row.approval === "denied" ? (
//                     <ThumbsDown className="inline text-red-500" size={20} />
//                   ) : (
//                     <CheckCircle className="inline text-green-500" size={20} />
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-center mt-4 gap-2">
//         {[1, 2, 3, 4, 5, "...", 20].map((page, index) => (
//           <button
//             key={index}
//             className={`px-3 py-1 rounded ${page === 2 ? "bg-gray-200" : ""}`}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </CardContent>
//   </Card>
// );

const DataTable: React.FC<DataTableProps> = ({ data, title }) => (
  <Card className="mt-6">
    <CardHeader>
      <CardTitle className="text-lg font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        {/* Desktop View */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Request</th>
                <th className="px-4 py-2 text-left">Request Date</th>
                <th className="px-4 py-2 text-left">Requesting Attorney</th>
                <th className="px-4 py-2 text-left">Responsible Attorney</th>
                <th className="px-4 py-2 text-left">
                  Client Name
                  <br />
                  Matter Name
                </th>
                <th className="px-4 py-2 text-center">Risk</th>
                <th className="px-4 py-2 text-center">Conflicts</th>
                <th className="px-4 py-2 text-center">Client Number</th>
                <th className="px-4 py-2 text-center">Matter Number</th>
                <th className="px-4 py-2 text-center">Approval</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{row.request}</td>
                  <td className="px-4 py-2">{row.requestDate}</td>
                  <td className="px-4 py-2">{row.requestingAttorney}</td>
                  <td className="px-4 py-2">{row.responsibleAttorney}</td>
                  <td className="px-4 py-2">
                    {row.clientName}
                    <br />
                    {row.matterName}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <StatusIcon status={row.risk as Status} />
                  </td>
                  <td className="px-4 py-2 text-center">
                    <StatusIcon status={row.conflicts as Status} />
                  </td>
                  <td className="px-4 py-2 text-center">{row.clientNumber}</td>
                  <td className="px-4 py-2 text-center">{row.matterNumber}</td>
                  <td className="px-4 py-2 text-center">
                    {row.approval === "pending" ? (
                      <MoreHorizontal
                        className="inline text-gray-500"
                        size={20}
                      />
                    ) : row.approval === "denied" ? (
                      <ThumbsDown className="inline text-red-500" size={20} />
                    ) : (
                      <CheckCircle
                        className="inline text-green-500"
                        size={20}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Field</th>
                {data.map((_, index) => (
                  <th key={index} className="px-4 py-2 text-left">
                    Request {index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Request</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2">
                    {row.request}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Request Date</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2">
                    {row.requestDate}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Requesting Attorney</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2">
                    {row.requestingAttorney}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Responsible Attorney</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2">
                    {row.responsibleAttorney}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Client/Matter</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2">
                    {row.clientName}
                    <br />
                    {row.matterName}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Risk</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    <StatusIcon status={row.risk as Status} />
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Conflicts</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    <StatusIcon status={row.conflicts as Status} />
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Client Number</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    {row.clientNumber}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Matter Number</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    {row.matterNumber}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Approval</th>
                {data.map((row, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    {row.approval === "pending" ? (
                      <MoreHorizontal
                        className="inline text-gray-500"
                        size={20}
                      />
                    ) : row.approval === "denied" ? (
                      <ThumbsDown className="inline text-red-500" size={20} />
                    ) : (
                      <CheckCircle
                        className="inline text-green-500"
                        size={20}
                      />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {[1, 2, 3, 4, 5, "...", 20].map((page, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${page === 2 ? "bg-gray-200" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <SideNavBar />
      <div className="flex flex-col lg:ml-64">
        {" "}
        {/* Changed to flex-col and moved margin here */}
        <Header /> {/* Header is now part of the content area */}
        <main className="flex-1 p-4 lg:p-6">
          {" "}
          {/* Removed ml-64 since it's handled by parent */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Line
                    type="monotone"
                    dataKey="series1"
                    stroke="#4CAF50"
                    strokeWidth={2}
                    dot={{ fill: "#4CAF50" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="series2"
                    stroke="#81C784"
                    strokeWidth={2}
                    dot={{ fill: "#81C784" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="series3"
                    stroke="#1B5E20"
                    strokeWidth={2}
                    dot={{ fill: "#1B5E20" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={donutData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {donutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={DONUT_COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-6 space-y-6">
            <DataTable data={matterData} title="New Matter Report" />
            <DataTable data={matterData} title="New Client Report" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
