//THIS Is DONE 
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Scan, AlertCircle, Shield, MoreHorizontal, Check } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import { StatusIcon } from "@/components/StatusIcon";

// const TopTable = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
//       <div className="min-w-max bg-white rounded-lg shadow">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Request
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Request Date
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Requester
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Attorney
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Client/Matter
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Risk
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Conflicts
//               </TableHead>
//               <TableHead className="font-semibold whitespace-nowrap">
//                 Client Number
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             <TableRow>
//               <TableCell>222222-S</TableCell>
//               <TableCell>12 May 2024</TableCell>
//               <TableCell>Smith, John</TableCell>
//               <TableCell>Associate-Aaron</TableCell>
//               <TableCell>
//                 <div>New Client</div>
//                 <div className="text-gray-500">New Matter</div>
//               </TableCell>
//               <TableCell>
//                 <StatusIcon type="risk" level="medium" size={24} />
//               </TableCell>
//               <TableCell>
//                 <StatusIcon type="conflicts" level="low" size={24} />
//               </TableCell>
//               <TableCell>
//                 <Badge variant="secondary">Pending</Badge>
//               </TableCell>
//               <TableCell>
//                 <button
//                   onClick={() => navigate("/intake")}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md border border-blue-500 hover:bg-blue-600 focus:outline-none shadow-lg hover:shadow-xl transition-all duration-150"
//                 >
//                   Start Intake
//                 </button>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

const TopTable = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
      <div className="min-w-max bg-white rounded-lg shadow">
        {/* Large Screen Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Request</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Request Date</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Requester</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Attorney</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Client/Matter</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Risk</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Conflicts</TableHead>
                  <TableHead className="font-semibold whitespace-nowrap px-6">Client Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4">222222-S</TableCell>
                  <TableCell className="px-6 py-4">12 May 2024</TableCell>
                  <TableCell className="px-6 py-4">Smith, John</TableCell>
                  <TableCell className="px-6 py-4">Associate-Aaron</TableCell>
                  <TableCell className="px-6 py-4">
                    <div>New Client</div>
                    <div className="text-gray-500 mt-1">New Matter</div>
                  </TableCell>
                  <TableCell className="px-6 py-4" onClick={()=>navigate("/riskdetails")}><StatusIcon type="risk" level="medium" size={24} onClick={()=>navigate("/riskdetails")} /></TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="low" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4">222223-S</TableCell>
                  <TableCell className="px-6 py-4">14 May 2024</TableCell>
                  <TableCell className="px-6 py-4">Johnson, Sarah</TableCell>
                  <TableCell className="px-6 py-4">Partner-Michael</TableCell>
                  <TableCell className="px-6 py-4">
                    <div>Existing Client</div>
                    <div className="text-gray-500 mt-1">New Matter</div>
                  </TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="risk" level="low" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="none" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4">222224-S</TableCell>
                  <TableCell className="px-6 py-4">15 May 2024</TableCell>
                  <TableCell className="px-6 py-4">Brown, David</TableCell>
                  <TableCell className="px-6 py-4">Partner-Emily</TableCell>
                  <TableCell className="px-6 py-4">
                    <div>New Client</div>
                    <div className="text-gray-500 mt-1">New Matter</div>
                  </TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="risk" level="high" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="medium" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4">222225-S</TableCell>
                  <TableCell className="px-6 py-4">16 May 2024</TableCell>
                  <TableCell className="px-6 py-4">Wilson, Emma</TableCell>
                  <TableCell className="px-6 py-4">Associate-James</TableCell>
                  <TableCell className="px-6 py-4">
                    <div>Existing Client</div>
                    <div className="text-gray-500 mt-1">New Matter</div>
                  </TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="risk" level="none" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="low" size={24} /></TableCell>
                  <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Mobile Screen Table - Single table with horizontal scroll */}
        <div className="block md:hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold whitespace-nowrap px-6">Field</TableHead>
                <TableHead className="font-semibold whitespace-nowrap px-6">Request 1</TableHead>
                <TableHead className="font-semibold whitespace-nowrap px-6">Request 2</TableHead>
                <TableHead className="font-semibold whitespace-nowrap px-6">Request 3</TableHead>
                <TableHead className="font-semibold whitespace-nowrap px-6">Request 4</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Request</TableHead>
                <TableCell className="px-6 py-4">222222-S</TableCell>
                <TableCell className="px-6 py-4">222223-S</TableCell>
                <TableCell className="px-6 py-4">222224-S</TableCell>
                <TableCell className="px-6 py-4">222225-S</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Request Date</TableHead>
                <TableCell className="px-6 py-4">12 May 2024</TableCell>
                <TableCell className="px-6 py-4">14 May 2024</TableCell>
                <TableCell className="px-6 py-4">15 May 2024</TableCell>
                <TableCell className="px-6 py-4">16 May 2024</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Requester</TableHead>
                <TableCell className="px-6 py-4">Smith, John</TableCell>
                <TableCell className="px-6 py-4">Johnson, Sarah</TableCell>
                <TableCell className="px-6 py-4">Brown, David</TableCell>
                <TableCell className="px-6 py-4">Wilson, Emma</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Attorney</TableHead>
                <TableCell className="px-6 py-4">Associate-Aaron</TableCell>
                <TableCell className="px-6 py-4">Partner-Michael</TableCell>
                <TableCell className="px-6 py-4">Partner-Emily</TableCell>
                <TableCell className="px-6 py-4">Associate-James</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Client/Matter</TableHead>
                <TableCell className="px-6 py-4">
                  <div>New Client</div>
                  <div className="text-gray-500 mt-1">New Matter</div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div>Existing Client</div>
                  <div className="text-gray-500 mt-1">New Matter</div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div>New Client</div>
                  <div className="text-gray-500 mt-1">New Matter</div>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <div>Existing Client</div>
                  <div className="text-gray-500 mt-1">New Matter</div>
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Risk</TableHead>
                <TableCell className="px-6 py-4" onClick={()=> navigate("/riskdetails")}><StatusIcon type="risk" level="medium" size={24} onClick={()=> navigate("/riskdetails")}/></TableCell>
                <TableCell className="px-6 py-4" onClick={()=> navigate("/riskdetails")}><StatusIcon type="risk" level="low" size={24} onClick={()=> navigate("/riskdetails")} /></TableCell>
                <TableCell className="px-6 py-4" onClick={()=> navigate("/riskdetails")}><StatusIcon type="risk" level="high" size={24} onClick={()=> navigate("/riskdetails")}/></TableCell>
                <TableCell className="px-6 py-4" onClick={()=> navigate("/riskdetails")}><StatusIcon type="risk" level="none" size={24} onClick={()=> navigate("/riskdetails")}/></TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Conflicts</TableHead>
                <TableCell className="px-6 py-4" ><StatusIcon type="conflicts" level="low" size={24} onClick={()=> navigate("/clientmatterdetails")} /></TableCell>
                <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="none" size={24} onClick={()=> navigate("/clientmatterdetails")} /></TableCell>
                <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="medium" size={24} onClick={()=> navigate("/clientmatterdetails")} /></TableCell>
                <TableCell className="px-6 py-4"><StatusIcon type="conflicts" level="low" size={24} onClick={()=> navigate("/clientmatterdetails")} /></TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableHead className="font-semibold px-6 py-4">Client Number</TableHead>
                <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell className="px-6 py-4"><Badge variant="secondary">Pending</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};


const YesNoDropdown = ({ label }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

const StandardDropdown = ({ label, options }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const ScreeningForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Side Navigation - Hidden on smaller screens, slide-out on mobile */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {" "}
        {/* Added ml-64 for sidebar width */}
        <Header className="z-30" />
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">
          {/* Header with buttons - Responsive layout */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <h1 className="text-xl font-bold">Screening Form</h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <Button variant="outline" size="sm" className="w-full md:w-auto">
                Save Form
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto whitespace-nowrap"
                onClick={() => navigate("/intake")}
              >
                Submit Request and Start Intake Form
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full md:w-auto"
                onClick={() => navigate("/")}
              >
                Submit Request
              </Button>
            </div>
          </div>

          {/* Status Table - Now with horizontal scroll on smaller screens */}
          <TopTable />

          {/* Grid Layout - Responsive to stack on smaller screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

              <div className="border-2 border-dashed border-gray-300 rounded-lg h-[400px] lg:h-[800px] flex flex-col items-center justify-center p-4">
                <Scan size={48} className="text-gray-400 mb-4" />
                <Button variant="outline" className="mb-2">
                  Scan Document
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  or drag and drop files here
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-blue-50 p-3 rounded mb-4">
                    <YesNoDropdown label="Draft Engagement Letter submitted for approval?" />
                  </div>

                  <div className="space-y-6">
                    <p className="text-sm text-gray-700">
                      Please confirm and complete the information below before
                      submitting form.
                    </p>

                    {/* Form Sections with Responsive Styling */}
                    <div className="space-y-6">
                      {/* Participating Timekeeper Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">
                          Participating Timekeeper Information
                        </h3>
                        <StandardDropdown
                          label="Originating Attorney"
                          options={[
                            {
                              value: "multiple",
                              label: "Select Multiple Users, add % if split",
                            },
                          ]}
                        />
                        <StandardDropdown
                          label="Profit Collaborators"
                          options={[
                            {
                              value: "multiple",
                              label: "Select Multiple Users",
                            },
                          ]}
                        />
                      </div>

                      {/* Workspace Information */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Workspace Information</h3>
                        <div className="space-y-2">
                          <Label>Workspace Folder</Label>
                          <Input />
                        </div>
                        <div className="space-y-2">
                          <Label>Security Policy</Label>
                          <Input
                            defaultValue="Ethical walls"
                            readOnly
                            className="bg-gray-50"
                          />
                        </div>
                        <StandardDropdown
                          label="Excluded Timekeepers"
                          options={[
                            {
                              value: "multiple",
                              label: "Select Multiple Users",
                            },
                          ]}
                        />
                        <StandardDropdown
                          label="Included Timekeepers"
                          options={[
                            {
                              value: "multiple",
                              label: "Select Multiple Users",
                            },
                          ]}
                        />
                      </div>

                      {/* Remaining sections with similar styling */}
                      {/* Fees, Rates & Discounts */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">
                          Fees, Rates & Discounts
                        </h3>
                        <StandardDropdown
                          label="Fee Arrangement Type"
                          options={[
                            { value: "hourly", label: "Hourly" },
                            { value: "fixed", label: "Fixed Fee" },
                            { value: "contingency", label: "Contingency" },
                            { value: "retainer", label: "Retainer" },
                          ]}
                        />
                        <div className="space-y-2">
                          <Label>Fee Arrangement Description</Label>
                          <Input />
                        </div>
                        <div className="space-y-2">
                          <Label>Fee Arrangement Value</Label>
                          <Input />
                        </div>
                        <StandardDropdown
                          label="Matter Rates"
                          options={[
                            { value: "standard", label: "Standard Rates" },
                            { value: "special", label: "Special Rates" },
                            { value: "discounted", label: "Discounted Rates" },
                          ]}
                        />
                        <div className="space-y-2">
                          <Label>Total Invoice Discount</Label>
                          <Input placeholder="%" />
                        </div>
                      </div>

                      {/* Invoice Details */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Invoice Details</h3>
                        <StandardDropdown
                          label="Invoice Format"
                          options={[
                            { value: "standard", label: "Standard" },
                            { value: "detailed", label: "Detailed" },
                            { value: "summary", label: "Summary" },
                          ]}
                        />
                        <StandardDropdown
                          label="Time Detail Sort Order"
                          options={[
                            { value: "chronological", label: "Chronological" },
                            { value: "timekeeper", label: "By Timekeeper" },
                          ]}
                        />
                        <StandardDropdown
                          label="Time Format"
                          options={[
                            { value: "decimal", label: "Decimal" },
                            {
                              value: "hours_minutes",
                              label: "Hours and Minutes",
                            },
                          ]}
                        />
                        <YesNoDropdown label="Attorney Notes on Invoice" />
                        <YesNoDropdown label="Print Task Hours" />
                        <YesNoDropdown label="Print Draft Invoice?" />
                        <StandardDropdown
                          label="Joint Bill (Multiple matters on one invoice)"
                          options={[
                            { value: "yes", label: "Yes" },
                            { value: "no", label: "No" },
                          ]}
                        />
                        <YesNoDropdown label="A/R Balance Forward" />
                      </div>

                      {/* Invoice Management */}
                      <div className="space-y-4">
                        <h3 className="font-semibold">Invoice Management</h3>
                        <StandardDropdown
                          label="Invoice Management"
                          options={[
                            { value: "auto", label: "Automatic" },
                            { value: "manual", label: "Manual" },
                          ]}
                        />
                        <StandardDropdown
                          label="Billing Submission Info"
                          options={[
                            { value: "email", label: "Email" },
                            { value: "portal", label: "Client Portal" },
                            { value: "mail", label: "Physical Mail" },
                          ]}
                        />
                        <StandardDropdown
                          label="Billing Frequency"
                          options={[
                            { value: "monthly", label: "Monthly" },
                            { value: "biweekly", label: "Bi-weekly" },
                            { value: "weekly", label: "Weekly" },
                          ]}
                        />
                        <YesNoDropdown label="Reminder Statement" />
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

export default ScreeningForm;
