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

const TopTable = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mb-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell className="font-semibold border px-4 py-2">
              Request
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Request Date
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Requester
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Responsible Attorney
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Client Name Matter Name
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Risk
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Conflicts
            </TableCell>
            <TableCell className="font-semibold border px-4 py-2">
              Client Number
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border px-4 py-2">222222-S</TableCell>
            <TableCell className="border px-4 py-2">
              12 May 2024 10:10 AM
            </TableCell>
            <TableCell className="border px-4 py-2">Smith, John</TableCell>
            <TableCell className="border px-4 py-2">Associate-Aaron</TableCell>
            <TableCell className="border px-4 py-2">
              <div>New Client</div>
              <div className="text-gray-500">New Matter</div>
            </TableCell>
            <TableCell className="border px-4 py-2">
              <StatusIcon type="risk" level="medium" size={24} />
            </TableCell>
            <TableCell className="border px-4 py-2">
              <StatusIcon type="conflicts" level="low" size={24} />
            </TableCell>
            <TableCell className="border px-4 py-2">
              <Badge variant="secondary">Pending</Badge>
            </TableCell>
            <TableCell>
              <button
                onClick={() => navigate("/intake")}
                className="px-4 py-2 bg-blue-500 text-white rounded-md border border-blue-500 hover:bg-blue-600 focus:outline-none shadow-lg hover:shadow-xl transition-all duration-150"
              >
                Start Intake
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const YesNoDropdown = ({ label }) => (
  <div>
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
  <div>
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
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className="max-w-full mx-auto p-4">
          {/* Header with buttons */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Screening Form</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Save Form
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="whitespace-nowrap"
                onClick={() => navigate("/intake")}
              >
                Submit Request and Start Intake Form
              </Button>
              {/* <Button variant="outline" size="sm" className="whitespace-nowrap">
                Submit Documents for Approval
              </Button>
              <Button variant="outline" size="sm">
                Clone Matter
              </Button> */}
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                Submit Request
              </Button>
            </div>
          </div>

          {/* Status Table */}
          <TopTable />

          <div className="grid grid-cols-2 gap-6">
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

              <div className="border-2 border-dashed border-gray-300 rounded-lg h-[800px] flex flex-col items-center justify-center p-4">
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
                          { value: "multiple", label: "Select Multiple Users" },
                        ]}
                      />
                    </div>

                    {/* Workspace Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Workspace Information</h3>
                      <div>
                        <Label>Workspace Folder</Label>
                        <Input />
                      </div>
                      <div>
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
                          { value: "multiple", label: "Select Multiple Users" },
                        ]}
                      />
                      <StandardDropdown
                        label="Included Timekeepers"
                        options={[
                          { value: "multiple", label: "Select Multiple Users" },
                        ]}
                      />
                    </div>

                    {/* Fees, Rates & Discounts */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Fees, Rates & Discounts</h3>
                      <StandardDropdown
                        label="Fee Arrangement Type"
                        options={[
                          { value: "hourly", label: "Hourly" },
                          { value: "fixed", label: "Fixed Fee" },
                          { value: "contingency", label: "Contingency" },
                          { value: "retainer", label: "Retainer" },
                        ]}
                      />
                      <div>
                        <Label>Fee Arrangement Description</Label>
                        <Input />
                      </div>
                      <div>
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
                      <div>
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
