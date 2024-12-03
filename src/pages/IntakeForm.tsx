import React from "react";
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

const requestData = [
  {
    request: "222222-S",
    requestDate: "12 May 2024",
    requester: "Smith, John",
    attorney: "Associate-Aaron",
    clientNameMatterName: "Good Client 2024 General Matter",
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
    clientNameMatterName: "Good Client 2024 General Matter",
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
    clientNameMatterName: "Good Client 2024 General Matter",
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
    clientNameMatterName: "Good Client 2024 General Matter",

    risk: "medium",
    conflicts: "low",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "evaluation",
  },
];

const IntakeForm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-xl font-bold w-full text-center md:text-left">
              Intake Form
            </h1>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full">
              <Button variant="outline" size="sm" className="w-full md:w-auto">
                Save Form
              </Button>
              <Button variant="outline" size="sm">
                Generate Engagement Letter
              </Button>
              <Button variant="outline" size="sm">
                Submit Documents for Approval
              </Button>
              <Button variant="outline" size="sm">
                Clone Matter
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/")}>
                Submit Request
              </Button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="mb-6 overflow-x-auto">
            <div className="min-w-max bg-white rounded-lg shadow">
              <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                {/* Desktop Table */}
                <div className="hidden lg:block">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        {[
                          "Request",
                          "Request Date",
                          "Requester",
                          "Attorney",
                          "Client/Matter",
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
                      {requestData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-blue-600 sm:pl-6">
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
                            {item.clientNameMatterName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <StatusIcon
                              type="risk"
                              level={item.risk}
                              size={24}
                              onClick={()=>navigate("/riskdetails")}
                            />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <StatusIcon
                              type="conflicts"
                              level={item.conflicts}
                              size={24}
                              onClick={()=>navigate("/conflictdetails")}
                            />
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Badge variant="secondary">
                              {item.clientNumber}
                            </Badge>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Badge variant="secondary">
                              {item.matterNumber}
                            </Badge>
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

                {/* Mobile Table */}
                <div className="lg:hidden">
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200">
                      {Object.keys(requestData[0]).map((key) => (
                        <tr key={key} className="hover:bg-gray-50">
                          <th
                            scope="row"
                            className="px-4 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50 whitespace-nowrap sticky top-0"
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </th>
                          {requestData.map((item, index) => (
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
                                  onClick={()=>navigate("/riskdetails")}
                                />
                              ) : key === "conflicts" ? (
                                <StatusIcon
                                  type="conflicts"
                                  level={item[key]}
                                  size={24}
                                  onClick={()=>navigate("/conflictdetails")}
                                />
                              ) : key === "approval" ? (
                                <StatusIcon
                                  type="approvals"
                                  level={item[key]}
                                  size={24}
                                  onClick={()=>navigate("/approvaldetails")}
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

                    {/* Participating Timekeeper Information */}
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

                    {/* Workspace Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Workspace Information</h3>

                      <div className="space-y-3">
                        <div>
                          <Label>Workspace Folder:</Label>
                          <Input />
                        </div>

                        <div>
                          <Label>Security Policy:</Label>
                          <Input defaultValue="Ethical walls" readOnly />
                        </div>

                        <div>
                          <Label>Excluded Timekeepers:</Label>
                          <Select>
                            <option>Select Multiple Users</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Included Timekeepers:</Label>
                          <Select>
                            <option>Select Multiple Users</option>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Fees, Rates & Discounts */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Fees, Rates & Discounts</h3>

                      <div className="space-y-3">
                        <div>
                          <Label>Fee Arrangement Type:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Fee Arrangement Description:</Label>
                          <Input />
                        </div>

                        <div>
                          <Label>Fee Arrangement Value:</Label>
                          <Input />
                        </div>

                        <div>
                          <Label>Matter Rates:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Total Invoice Discount:</Label>
                          <Input placeholder="%" />
                        </div>
                      </div>
                    </div>

                    {/* Invoice Details */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Invoice Details</h3>

                      <div className="space-y-3">
                        <div>
                          <Label>Invoice Format:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Time Detail Sort Order:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Time Detail Format:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Time Format:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Cost Format:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Task Based Billing:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Attorney Summary Print:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Attorney/Staff Summary:</Label>
                          <Input defaultValue="Y/N" readOnly />
                        </div>

                        <div>
                          <Label>Attorney Notes on Invoice:</Label>
                          <Input defaultValue="Y/N" readOnly />
                        </div>

                        <div>
                          <Label>Print Task Hours:</Label>
                          <Input defaultValue="Y/N" readOnly />
                        </div>

                        <div>
                          <Label>Print Draft Invoice?:</Label>
                          <Input defaultValue="Y/N" readOnly />
                        </div>

                        <div>
                          <Label>
                            Joint Bill (Multiple matters on one invoice):
                          </Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>A/R Balance Forward:</Label>
                          <Input defaultValue="Y/N" readOnly />
                        </div>
                      </div>
                    </div>

                    {/* Invoice Management */}
                    <div className="space-y-4">
                      <h3 className="font-semibold">Invoice Management</h3>

                      <div className="space-y-3">
                        <div>
                          <Label>Invoice Management:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Billing Submission Info:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Billing Frequency:</Label>
                          <Select>
                            <option>Select One</option>
                          </Select>
                        </div>

                        <div>
                          <Label>Reminder Statement:</Label>
                          <Input defaultValue="Y/N" readOnly />
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
