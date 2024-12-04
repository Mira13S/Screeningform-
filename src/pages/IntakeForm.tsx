// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Select } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Scan, AlertCircle, Shield, MoreHorizontal } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import SideNavBar from "@/components/SideNavBar";
// import Header from "@/components/Header";
// import { useNavigate } from "react-router-dom";
// import { StatusIcon } from "@/components/StatusIcon";

// const IntakeForm = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col md:flex-row min-h-screen ">
//       <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
//         <SideNavBar />
//       </div>

//       {/* Main content with proper margin to prevent navbar overlap */}
//       <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
//         <Header />

//         <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             <h1 className="text-xl font-bold w-full text-center md:text-left">
//               Intake Form
//             </h1>
//             <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full">
//               <Button variant="outline" size="sm" className="w-full md:w-auto">
//                 Save Form
//               </Button>
//               <Button variant="outline" size="sm">
//                 Generate Engagement Letter
//               </Button>
//               <Button variant="outline" size="sm">
//                 Submit Documents for Approval
//               </Button>
//               <Button variant="outline" size="sm">
//                 Clone Matter
//               </Button>
//               <Button variant="outline" size="sm" onClick={() => navigate("/")}>
//                 Submit Request
//               </Button>
//             </div>
//           </div>

//           {/* Status Bar */}
//           <div className="w-full mb-6 overflow-x-auto">
//             <Table className="min-w-[1200px]">
//               <TableHeader>
//                 <TableRow>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Request
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Request Date
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Requester
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Responsible Attorney
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Client Name Matter Name
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Risk
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Conflicts
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Client Number
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Matter Number
//                   </TableCell>
//                   <TableCell className="font-semibold border px-4 py-2">
//                     Approval
//                   </TableCell>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 <TableRow>
//                   <TableCell className="border px-4 py-2">222222-S</TableCell>
//                   <TableCell className="border px-4 py-2">
//                     12 May 2024 10:10 AM
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     Smith, John
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     Associate-Aaron
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <div>New Client</div>
//                     <div className="text-gray-500">New Matter</div>
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <StatusIcon type="risk" level="medium" size={24} />
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <StatusIcon type="conflicts" level="low" size={24} />
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <Badge variant="secondary">Pending</Badge>
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <Badge variant="secondary">Pending</Badge>
//                   </TableCell>
//                   <TableCell className="border px-4 py-2">
//                     <StatusIcon type="approvals" level="evaluation" size={24} />
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column - Document Upload */}
//             <div>
//               <div className="mb-4">
//                 <h2 className="font-semibold mb-2">
//                   Drag & Drop or Upload Files Here:
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Emails from client regarding new matter, Engagement Letters,
//                   OCGs, Fee agreements
//                 </p>
//               </div>

//               <div className="border-2 border-dashed border-gray-300 rounded-lg h-[400px] md:h-[800px] flex flex-col items-center justify-center p-4">
//                 <Scan size={48} className="text-gray-400 mb-4" />
//                 <Button variant="outline" className="mb-2">
//                   Scan Document
//                 </Button>
//                 <p className="text-sm text-gray-500 text-center">
//                   or drag and drop files here
//                 </p>
//               </div>
//             </div>

//             {/* Right Column - Complete Form */}
//             <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="bg-blue-50 p-3 rounded mb-4">
//                     <p>Y/N? Draft Engagement Letter submitted for approval?</p>
//                   </div>

//                   <div className="space-y-6">
//                     <p className="text-sm text-gray-700">
//                       Please confirm and complete the information below before
//                       submitting form.
//                     </p>

//                     {/* Participating Timekeeper Information */}
//                     <div className="space-y-4">
//                       <h3 className="font-semibold">
//                         Participating Timekeeper Information
//                       </h3>

//                       <div className="space-y-3">
//                         <div>
//                           <Label>Originating Attorney:</Label>
//                           <Select>
//                             <option>
//                               Select Multiple Users, add % if split
//                             </option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Profit Collaborators:</Label>
//                           <Select>
//                             <option>Select Multiple Users</option>
//                           </Select>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Workspace Information */}
//                     <div className="space-y-4">
//                       <h3 className="font-semibold">Workspace Information</h3>

//                       <div className="space-y-3">
//                         <div>
//                           <Label>Workspace Folder:</Label>
//                           <Input />
//                         </div>

//                         <div>
//                           <Label>Security Policy:</Label>
//                           <Input defaultValue="Ethical walls" readOnly />
//                         </div>

//                         <div>
//                           <Label>Excluded Timekeepers:</Label>
//                           <Select>
//                             <option>Select Multiple Users</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Included Timekeepers:</Label>
//                           <Select>
//                             <option>Select Multiple Users</option>
//                           </Select>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Fees, Rates & Discounts */}
//                     <div className="space-y-4">
//                       <h3 className="font-semibold">Fees, Rates & Discounts</h3>

//                       <div className="space-y-3">
//                         <div>
//                           <Label>Fee Arrangement Type:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Fee Arrangement Description:</Label>
//                           <Input />
//                         </div>

//                         <div>
//                           <Label>Fee Arrangement Value:</Label>
//                           <Input />
//                         </div>

//                         <div>
//                           <Label>Matter Rates:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Total Invoice Discount:</Label>
//                           <Input placeholder="%" />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Invoice Details */}
//                     <div className="space-y-4">
//                       <h3 className="font-semibold">Invoice Details</h3>

//                       <div className="space-y-3">
//                         <div>
//                           <Label>Invoice Format:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Time Detail Sort Order:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Time Detail Format:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Time Format:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Cost Format:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Task Based Billing:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Attorney Summary Print:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Attorney/Staff Summary:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>

//                         <div>
//                           <Label>Attorney Notes on Invoice:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>

//                         <div>
//                           <Label>Print Task Hours:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>

//                         <div>
//                           <Label>Print Draft Invoice?:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>

//                         <div>
//                           <Label>
//                             Joint Bill (Multiple matters on one invoice):
//                           </Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>A/R Balance Forward:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Invoice Management */}
//                     <div className="space-y-4">
//                       <h3 className="font-semibold">Invoice Management</h3>

//                       <div className="space-y-3">
//                         <div>
//                           <Label>Invoice Management:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Billing Submission Info:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Billing Frequency:</Label>
//                           <Select>
//                             <option>Select One</option>
//                           </Select>
//                         </div>

//                         <div>
//                           <Label>Reminder Statement:</Label>
//                           <Input defaultValue="Y/N" readOnly />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntakeForm;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Scan, AlertCircle, Shield, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { StatusIcon } from "@/components/StatusIcon";

const IntakeForm = () => {
  const navigate = useNavigate();

  // Mock data with additional rows
  const tableData = [
    {
      request: "222222-S",
      requestDate: "12 May 2024 10:10 AM",
      requester: "Smith, John",
      responsibleAttorney: "Associate-Aaron",
      clientMatterName: "New Client, New Matter",
      risk: "medium",
      conflicts: "low",
      clientNumber: "Pending",
      matterNumber: "Pending",
      approval: "evaluation",
    },
    {
      request: "333333-M",
      requestDate: "15 May 2024 02:30 PM",
      requester: "Johnson, Emily",
      responsibleAttorney: "Partner-Sarah",
      clientMatterName: "Existing Client, Expansion",
      risk: "low",
      conflicts: "none",
      clientNumber: "Active",
      matterNumber: "In Progress",
      approval: "approved",
    },
    {
      request: "444444-L",
      requestDate: "18 May 2024 11:45 AM",
      requester: "Williams, Michael",
      responsibleAttorney: "Senior-David",
      clientMatterName: "Complex Litigation",
      risk: "high",
      conflicts: "moderate",
      clientNumber: "Review",
      matterNumber: "Pending Review",
      approval: "pending",
    },
  ];

  // Responsive table component
  const ResponsiveTable = () => {
    const tableHeaders = [
      "Request",
      "Request Date",
      "Requester",
      "Responsible Attorney",
      "Client/Matter Name",
      "Risk",
      "Conflicts",
      "Client Number",
      "Matter Number",
      "Approval",
    ];

    return (
      <>
        {/* Desktop Table View */}
        <div className="hidden lg:block w-full overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-x-auto">
              <Table className="min-w-[1200px]">
                <TableHeader>
                  <TableRow>
                    {tableHeaders.map((header, index) => (
                      <TableHead
                        key={index}
                        className="border px-4 py-2 whitespace-nowrap text-center"
                      >
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="border px-4 py-2 text-center">
                        {row.request}
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        {row.requestDate}
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        {row.requester}
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        {row.responsibleAttorney}
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <div>{row.clientMatterName.split(",")[0]}</div>
                        <div className="text-gray-500">
                          {row.clientMatterName.split(",")[1]}
                        </div>
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <StatusIcon type="risk" level={row.risk} size={24} />
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <StatusIcon
                          type="conflicts"
                          level={row.conflicts}
                          size={24}
                        />
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <Badge variant="secondary">{row.clientNumber}</Badge>
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <Badge variant="secondary">{row.matterNumber}</Badge>
                      </TableCell>
                      <TableCell className="border px-4 py-2 text-center">
                        <StatusIcon
                          type="approvals"
                          level={row.approval}
                          size={24}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {tableData.map((row, index) => (
            <Card key={index} className="w-full">
              <CardContent className="p-4">
                {tableHeaders.map((header, headerIndex) => (
                  <div
                    key={headerIndex}
                    className="flex justify-between border-b py-2 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-600">
                      {header}:
                    </span>
                    <span className="text-right">
                      {header === "Request" && row.request}
                      {header === "Request Date" && row.requestDate}
                      {header === "Requester" && row.requester}
                      {header === "Responsible Attorney" &&
                        row.responsibleAttorney}
                      {header === "Client/Matter Name" && row.clientMatterName}
                      {header === "Risk" && (
                        <StatusIcon type="risk" level={row.risk} size={24} />
                      )}
                      {header === "Conflicts" && (
                        <StatusIcon
                          type="conflicts"
                          level={row.conflicts}
                          size={24}
                        />
                      )}
                      {header === "Client Number" && (
                        <Badge variant="secondary">{row.clientNumber}</Badge>
                      )}
                      {header === "Matter Number" && (
                        <Badge variant="secondary">{row.matterNumber}</Badge>
                      )}
                      {header === "Approval" && (
                        <StatusIcon
                          type="approvals"
                          level={row.approval}
                          size={24}
                        />
                      )}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-xl font-bold w-full text-center md:text-left">
              Intake Form
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 w-full justify-center md:justify-end">
              <Button variant="outline" size="sm" className="w-full">
                Save Form
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Generate Engagement Letter
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Submit Documents for Approval
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Clone Matter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Submit Request
              </Button>
            </div>
          </div>

          {/* Status Bar with Responsive Table */}
          <ResponsiveTable />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Document Upload */}
            <div>
              <div className="mb-4">
                <h2 className="font-semibold mb-2">
                  Drag & Drop or Upload Files Here:
                </h2>
                <p className="text-sm text-gray-600">
                  Emails from client regarding new matter, Engagement Letters,
                  OCGs, Fee agreements
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg h-[400px] md:h-[800px] flex flex-col items-center justify-center p-4">
                <Scan size={48} className="text-gray-400 mb-4" />
                <Button variant="outline" className="mb-2">
                  Scan Document
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  or drag and drop files here
                </p>
              </div>
            </div>

            {/* Right Column - Complete Form */}
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-blue-50 p-3 rounded mb-4">
                    <p>Y/N? Draft Engagement Letter submitted for approval?</p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-sm text-gray-700">
                      Please confirm and complete the information below before
                      submitting form.
                    </p>

                    <div className="space-y-4">
                      <h3 className="font-semibold">
                        Participating Timekeeper Information
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <Label>Originating Attorney:</Label>
                          <Select>
                            <option>
                              Select Multiple Users, add % if split
                            </option>
                          </Select>
                        </div>

                        <div>
                          <Label>Profit Collaborators:</Label>
                          <Select>
                            <option>Select Multiple Users</option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntakeForm;
