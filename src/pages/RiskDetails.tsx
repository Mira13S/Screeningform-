// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar } from "@/components/ui/avatar";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { AlertCircle, MoreHorizontal, User2 } from "lucide-react";
// import SideNavBar from "@/components/SideNavBar";
// import Header from "@/components/Header";
// import { StatusIcon } from "@/components/StatusIcon";
// import { useNavigate } from "react-router-dom";

// const comments = [
//   {
//     id: 1,
//     author: "Christan Bilney",
//     timeAgo: "2 days ago",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     priority: "Low priority",
//     version: "V 3.20",
//   },
//   {
//     id: 2,
//     author: "Hady Vanetti",
//     timeAgo: "4 days ago",
//     content:
//       "Aliquam vel nibh iaculis, ornare purus sit amet, euismod dui. Cras sed tristique neque.\nCras ornare dui lorem, vel rhoncus elit venenatis sit amet. Suspendisse varius massa in gravida commodo.",
//     priority: "Critical",
//     version: "V 3.13",
//   },
// ];

// const RiskAssessment = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex">
//       <SideNavBar />
//       <div className="flex-1 ml-64">
//         {" "}
//         {/* Add margin to account for fixed sidebar */}
//         <Header />
//         <div className=" mx-auto p-4 bg-white">
//           {/* max-w-6xl */}
//           {/* Risk Details Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Risk Details</h2>
//               <div className="flex gap-2">
//                 <button className="px-4 py-2 border rounded hover:bg-gray-50">
//                   ESCALATE
//                 </button>
//                 <button className="px-4 py-2 border rounded hover:bg-gray-50">
//                   REJECT
//                 </button>
//                 <button className="px-4 py-2 border rounded bg-blue-50 text-blue-600 hover:bg-blue-100">
//                   APPROVE
//                 </button>
//               </div>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="table-auto w-full text-sm mb-6">
//                 <thead>
//                   <tr className="bg-gray-100">
//                     <th className="px-4 py-2 font-medium text-left">Request</th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Request Date
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Requester
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Responsible Attorney
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left col-span-2">
//                       Client Name Matter Name
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">Risk</th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Conflicts
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Client Number
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Matter Number
//                     </th>
//                     <th className="px-4 py-2 font-medium text-left">
//                       Approval
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border px-4 py-2">222222-S</td>
//                     <td className="border px-4 py-2">19 May, 2021 10:10 AM</td>
//                     <td className="border px-4 py-2">Associate, Aaron</td>
//                     <td className="border px-4 py-2">Smith, John</td>
//                     <td className="border px-4 py-2 col-span-2">
//                       <div>New Client</div>
//                       <div className="text-gray-500">New Matter</div>
//                     </td>
//                     <td className="border px-4 py-2">
//                       <StatusIcon type="risk" level="medium" size={24} />
//                     </td>
//                     <td className="border px-4 py-2">
//                       <StatusIcon
//                         type="conflicts"
//                         level="evaluation"
//                         size={24}
//                       />
//                     </td>
//                     <td className="border px-4 py-2">Pending</td>
//                     <td className="border px-4 py-2">Pending</td>
//                     <td className="border px-4 py-2">
//                       <StatusIcon
//                         type="approvals"
//                         level="evaluation"
//                         size={24}
//                       />
//                     </td>
//                   </tr>
//                   {/* Add more rows dynamically here */}
//                 </tbody>
//               </table>
//             </div>

//             {/* Tabs Section */}
//             <Tabs defaultValue="assessment">
//               <TabsList className="border-b w-full justify-start gap-4">
//                 <TabsTrigger value="assessment">Assessment</TabsTrigger>
//                 <TabsTrigger value="news">News</TabsTrigger>
//                 <TabsTrigger value="scoreDetails">Score Details</TabsTrigger>
//                 <TabsTrigger value="comments">Comments</TabsTrigger>
//               </TabsList>

//               <TabsContent value="assessment" className="mt-4">
//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="flex gap-8">
//                       {/* Gauge visualization */}
//                       <div className="w-48 h-48 border-4 rounded-full flex items-center justify-center">
//                         <div className="text-center">
//                           <div>D&B Credit Score</div>
//                           <div className="text-gray-500">DUNS #</div>
//                         </div>
//                       </div>

//                       {/* Score table */}
//                       <div className="flex-1">
//                         <table className="w-full">
//                           <thead className="bg-gray-100">
//                             <tr>
//                               <th className="p-2 text-left">Risk Factor</th>
//                               <th className="p-2 text-left">Risk Level</th>
//                               <th className="p-2 text-left">Score</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td className="p-2">D&B Delinquency Predictor</td>
//                               <td className="p-2 text-orange-500">Med</td>
//                               <td className="p-2">389</td>
//                             </tr>
//                             <tr>
//                               <td className="p-2">D&B PAYDEX Score</td>
//                               <td className="p-2 text-orange-500">Med</td>
//                               <td className="p-2">65</td>
//                             </tr>
//                             <tr>
//                               <td className="p-2">
//                                 D&B Financial Stress Score
//                               </td>
//                               <td className="p-2 text-red-500">High</td>
//                               <td className="p-2">1430</td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//               <TabsContent value="comments" className="mt-4">
//                 <div className="p-4 space-y-6 border-4 rounded-lg">
//                   {comments.map((comment) => (
//                     <div key={comment.id} className="space-y-3">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3">
//                           <Avatar className="w-10 h-10 bg-gray-200">
//                             <div className="w-full h-full flex items-center justify-center">
//                               <svg
//                                 className="w-6 h-6 text-gray-400"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                                 />
//                               </svg>
//                             </div>
//                           </Avatar>
//                           <div>
//                             <h3 className="text-sm font-medium text-gray-900">
//                               {comment.author}
//                             </h3>
//                             <p className="text-sm text-gray-500">
//                               {comment.timeAgo}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Badge
//                             variant={
//                               comment.priority === "Critical"
//                                 ? "destructive"
//                                 : "secondary"
//                             }
//                             className="rounded-full px-3 py-1"
//                           >
//                             {comment.priority}
//                           </Badge>
//                           <Badge
//                             variant="secondary"
//                             className="rounded-full px-3 py-1"
//                           >
//                             {comment.version}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="text-sm text-gray-600 pl-13">
//                         {comment.content}
//                         <button className="text-gray-500 hover:text-gray-700 ml-1">
//                           More...
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="p-4 border-t">
//                   <Button
//                     variant="outline"
//                     className="w-full justify-center py-2 px-4"
//                   >
//                     ADD COMMENT
//                   </Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskAssessment;

// import React, { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { MoreHorizontal, User2 } from "lucide-react";
// import SideNavBar from "@/components/SideNavBar";
// import Header from "@/components/Header";
// import { StatusIcon } from "@/components/StatusIcon";
// import { useNavigate } from "react-router-dom";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const comments = [
//   {
//     id: 1,
//     author: "Christan Bilney",
//     timeAgo: "2 days ago",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     priority: "Low priority",
//     version: "V 3.20",
//   },
//   {
//     id: 2,
//     author: "Hady Vanetti",
//     timeAgo: "4 days ago",
//     content:
//       "Aliquam vel nibh iaculis, ornare purus sit amet, euismod dui. Cras sed tristique neque.\nCras ornare dui lorem, vel rhoncus elit venenatis sit amet. Suspendisse varius massa in gravida commodo.",
//     priority: "Critical",
//     version: "V 3.13",
//   },
// ];

// const RiskAssessment = () => {
//   const navigate = useNavigate();
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row">
//       <SideNavBar className="hidden md:block" />
//       <div className="flex-1 md:ml-64">
//         <Header />
//         <div className="p-4 bg-white">
//           {/* Risk Details Section */}
//           <div className="mb-6">
//             <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
//               <h2 className="text-lg font-semibold">Risk Details</h2>
//               <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="w-full md:w-auto"
//                 >
//                   ESCALATE
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="w-full md:w-auto"
//                 >
//                   REJECT
//                 </Button>
//                 <Button
//                   variant="default"
//                   size="sm"
//                   className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
//                 >
//                   APPROVE
//                 </Button>
//               </div>
//             </div>

//             {/* Mobile-friendly table view */}
//             <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
//               <div className="min-w-max bg-white rounded-lg shadow">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Request
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Request Date
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Requester
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Attorney
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Client/Matter
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Risk
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Conflicts
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Client Number
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Matter Number
//                       </TableHead>
//                       <TableHead className="font-semibold whitespace-nowrap">
//                         Approval
//                       </TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>222222-S</TableCell>
//                       <TableCell>12 May 2024</TableCell>
//                       <TableCell>Smith, John</TableCell>
//                       <TableCell>Associate-Aaron</TableCell>
//                       <TableCell>
//                         <div>New Client</div>
//                         <div className="text-gray-500">New Matter</div>
//                       </TableCell>
//                       <TableCell>
//                         <StatusIcon type="risk" level="medium" size={24} />
//                       </TableCell>
//                       <TableCell>
//                         <StatusIcon type="conflicts" level="low" size={24} />
//                       </TableCell>
//                       <TableCell>
//                         <Badge variant="secondary">Pending</Badge>
//                       </TableCell>
//                       <TableCell>
//                         <Badge variant="secondary">Pending</Badge>
//                       </TableCell>
//                       <TableCell>
//                         <StatusIcon
//                           type="approvals"
//                           level="evaluation"
//                           size={24}
//                         />
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </div>
//             </div>

//             {/* Desktop table view */}
//             {/* <div className="hidden md:block overflow-x-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Request</TableHead>
//                     <TableHead>Request Date</TableHead>
//                     <TableHead>Requester</TableHead>
//                     <TableHead>Responsible Attorney</TableHead>
//                     <TableHead>Client Name Matter Name</TableHead>
//                     <TableHead>Risk</TableHead>
//                     <TableHead>Conflicts</TableHead>
//                     <TableHead>Client Number</TableHead>
//                     <TableHead>Matter Number</TableHead>
//                     <TableHead>Approval</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>222222-S</TableCell>
//                     <TableCell>19 May, 2021 10:10 AM</TableCell>
//                     <TableCell>Associate, Aaron</TableCell>
//                     <TableCell>Smith, John</TableCell>
//                     <TableCell>
//                       <div>New Client</div>
//                       <div className="text-gray-500">New Matter</div>
//                     </TableCell>
//                     <TableCell>
//                       <StatusIcon type="risk" level="medium" size={24} />
//                     </TableCell>
//                     <TableCell>
//                       <StatusIcon
//                         type="conflicts"
//                         level="evaluation"
//                         size={24}
//                       />
//                     </TableCell>
//                     <TableCell>Pending</TableCell>
//                     <TableCell>Pending</TableCell>
//                     <TableCell>
//                       <StatusIcon
//                         type="approvals"
//                         level="evaluation"
//                         size={24}
//                       />
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </div> */}

//             {/* Tabs Section */}
//             <Tabs defaultValue="assessment" className="mt-6">
//               <TabsList className="w-full justify-start overflow-x-auto">
//                 <TabsTrigger value="assessment">Assessment</TabsTrigger>
//                 <TabsTrigger value="news">News</TabsTrigger>
//                 <TabsTrigger value="scoreDetails">Score Details</TabsTrigger>
//                 <TabsTrigger value="comments">Comments</TabsTrigger>
//               </TabsList>

//               <TabsContent value="assessment" className="mt-4">
//                 <Card>
//                   <CardContent className="p-6">
//                     <div className="flex flex-col md:flex-row gap-8">
//                       {/* Gauge visualization */}
//                       <div className="w-48 h-48 border-4 border-gray-300 rounded-full flex items-center justify-center">
//                         <div className="text-center">
//                           <div className="text-base font-semibold">
//                             D&B Credit Score
//                           </div>
//                           <div className="text-sm text-gray-500">DUNS #</div>
//                         </div>
//                       </div>
//                       {/* Score table */}
//                       <div className="flex-1 w-full overflow-x-auto">
//                         <Table>
//                           <TableHeader>
//                             <TableRow>
//                               <TableHead>Risk Factor</TableHead>
//                               <TableHead>Risk Level</TableHead>
//                               <TableHead>Score</TableHead>
//                             </TableRow>
//                           </TableHeader>
//                           <TableBody>
//                             <TableRow>
//                               <TableCell>D&B Delinquency Predictor</TableCell>
//                               <TableCell className="text-orange-500">
//                                 Med
//                               </TableCell>
//                               <TableCell>389</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell>D&B PAYDEX Score</TableCell>
//                               <TableCell className="text-orange-500">
//                                 Med
//                               </TableCell>
//                               <TableCell>65</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell>D&B Financial Stress Score</TableCell>
//                               <TableCell className="text-red-500">
//                                 High
//                               </TableCell>
//                               <TableCell>1430</TableCell>
//                             </TableRow>
//                           </TableBody>
//                         </Table>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="comments" className="mt-4">
//                 <div className="p-4 space-y-6 border-4 rounded-lg">
//                   {comments.map((comment) => (
//                     <div key={comment.id} className="space-y-3">
//                       <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
//                         <div className="flex items-center space-x-3">
//                           <Avatar className="w-10 h-10 bg-gray-200">
//                             <AvatarFallback>
//                               <User2 className="w-6 h-6 text-gray-400" />
//                             </AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <h3 className="text-sm font-medium text-gray-900">
//                               {comment.author}
//                             </h3>
//                             <p className="text-sm text-gray-500">
//                               {comment.timeAgo}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Badge
//                             variant={
//                               comment.priority === "Critical"
//                                 ? "destructive"
//                                 : "secondary"
//                             }
//                             className="rounded-full px-3 py-1"
//                           >
//                             {comment.priority}
//                           </Badge>
//                           <Badge
//                             variant="secondary"
//                             className="rounded-full px-3 py-1"
//                           >
//                             {comment.version}
//                           </Badge>
//                         </div>
//                       </div>
//                       <div className="text-sm text-gray-600 pl-0 md:pl-13">
//                         {comment.content}
//                         <button className="text-gray-500 hover:text-gray-700 ml-1">
//                           More...
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="p-4 border-t">
//                   <Button
//                     variant="outline"
//                     className="w-full justify-center py-2 px-4"
//                   >
//                     ADD COMMENT
//                   </Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskAssessment;
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MoreHorizontal, User2 } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { StatusIcon } from "@/components/StatusIcon";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const riskData = [
  {
    request: "222222-S",
    requestDate: "12 May 2024",
    requester: "Smith, John",
    attorney: "Associate-Aaron",
    clientMatter: "New ClientNew Matter",
    risk: "medium",
    conflicts: "low",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "evaluation",
  },
  {
    request: "222222-S",
    requestDate: "12 May 2024",
    requester: "Smith, John",
    attorney: "Associate-Aaron",
    clientMatter: "New ClientNew Matter",
    risk: "medium",
    conflicts: "low",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "evaluation",
  },
  {
    request: "222222-S",
    requestDate: "12 May 2024",
    requester: "Smith, John",
    attorney: "Associate-Aaron",
    clientMatter: "New Client New Matter",
    risk: "medium",
    conflicts: "low",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "evaluation",
  },
];
const comments = [
  {
    id: 1,
    author: "Christan Bilney",
    timeAgo: "2 days ago",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    priority: "Low priority",
    version: "V 3.20",
  },
  {
    id: 2,
    author: "Hady Vanetti",
    timeAgo: "4 days ago",
    content:
      "Aliquam vel nibh iaculis, ornare purus sit amet, euismod dui. Cras sed tristique neque.\nCras ornare dui lorem, vel rhoncus elit venenatis sit amet. Suspendisse varius massa in gravida commodo.",
    priority: "Critical",
    version: "V 3.13",
  },
];
const RiskAssessment = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <SideNavBar className="hidden md:block" />
      <div className="flex-1 md:ml-64">
        <Header />
        <div className="p-4 bg-white">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-5">Risk Details</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                >
                  ESCALATE
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto"
                >
                  REJECT
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  APPROVE
                </Button>
              </div>
            </div>

            {/* Desktop Table */}
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
                      {riskData.map((item, index) => (
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
                            {item.attorney}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.clientMatter}
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

              {/* Mobile Table */}
              <div className="lg:hidden">
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200">
                      {Object.keys(riskData[0]).map((key) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <th
                            scope="row"
                            className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </th>
                          {riskData.map((item, index) => (
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
                                  onClick={() => navigate("/conflictdetails")}
                                />
                              ) : key === "approval" ? (
                                <StatusIcon
                                  type="approvals"
                                  level={item[key]}
                                  size={24}
                                  onClick={() => navigate("/approvaldetails")}
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

            {/* Tabs Section */}
            <Tabs defaultValue="assessment">
              <TabsList className="border-b w-full justify-start gap-4">
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="scoreDetails">Score Details</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              <TabsContent value="assessment" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-8">
                      {/* Gauge visualization */}
                      <div className="w-48 h-48 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div>D&B Credit Score</div>
                          <div className="text-gray-500">DUNS #</div>
                        </div>
                      </div>

                      {/* Score table */}
                      <div className="flex-1">
                        <table className="w-full">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="p-2 text-left">Risk Factor</th>
                              <th className="p-2 text-left">Risk Level</th>
                              <th className="p-2 text-left">Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="p-2">D&B Delinquency Predictor</td>
                              <td className="p-2 text-orange-500">Med</td>
                              <td className="p-2">389</td>
                            </tr>
                            <tr>
                              <td className="p-2">D&B PAYDEX Score</td>
                              <td className="p-2 text-orange-500">Med</td>
                              <td className="p-2">65</td>
                            </tr>
                            <tr>
                              <td className="p-2">
                                D&B Financial Stress Score
                              </td>
                              <td className="p-2 text-red-500">High</td>
                              <td className="p-2">1430</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="comments" className="mt-4">
                <div className="p-4 space-y-6 border-4 rounded-lg">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10 bg-gray-200">
                            <div className="w-full h-full flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                            </div>
                          </Avatar>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              {comment.author}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {comment.timeAgo}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              comment.priority === "Critical"
                                ? "destructive"
                                : "secondary"
                            }
                            className="rounded-full px-3 py-1"
                          >
                            {comment.priority}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="rounded-full px-3 py-1"
                          >
                            {comment.version}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 pl-13">
                        {comment.content}
                        <button className="text-gray-500 hover:text-gray-700 ml-1">
                          More...
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <Button
                    variant="outline"
                    className="w-full justify-center py-2 px-4"
                  >
                    ADD COMMENT
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
