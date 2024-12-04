import React from "react";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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

const ClientMatterDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed positioning for SideNavBar with proper z-index */}
      <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
        <SideNavBar />
      </div>

      {/* Main content with proper margin to prevent navbar overlap */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <Header className="z-30" />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">
          {/* Header actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
            <h1 className="text-xl sm:text-2xl font-bold">
              Client/Matter Details
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                onClick={() => navigate("/clientmatterchange")}
              >
                Request Changes
              </button>
              <button
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                onClick={() => navigate("/")}
              >
                Print
              </button>
            </div>
          </div>

          {/* Header Information */}
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
                          "Client #",
                          "Matter #",
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
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            onClick={() => navigate("/riskdetails")}
                          >
                            <StatusIcon
                              type="risk"
                              level={item.risk}
                              size={24}
                              onClick={() => navigate("/riskdetails")}
                            />
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            onClick={() => navigate("/conflictdetails")}
                          >
                            <StatusIcon
                              type="conflicts"
                              level={item.conflicts}
                              size={24}
                              onClick={() => navigate("/conflictdetails")}
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
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            onClick={() => navigate("/approvaldetails")}
                          >
                            <StatusIcon
                              type="approvals"
                              level={item.approval}
                              size={24}
                              onClick={() => navigate("/approvaldetails")}
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
            </div>
          </div>

          {/* Main Content Split */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Side - Scan/Upload Section */}
            <div className="w-full lg:w-1/3">
              <Card className="h-full min-h-[400px]">
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center p-4 sm:p-6">
                  <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mb-4" />
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      Drag & Drop or Upload Files Here
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload PDF, DOC, DOCX, or image files
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                      Choose Files
                    </button>
                  </div>
                  <div className="w-full mt-6 sm:mt-8">
                    <h4 className="font-semibold mb-2">
                      List of Emails or Documents
                    </h4>
                    <div className="border rounded p-2 h-32 sm:h-40 overflow-y-auto">
                      {/* Upload list will appear here */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-2/3">
              <Card className="h-full">
                <div className="h-full overflow-y-auto p-4 sm:p-6">
                  {/* Timekeeper Information */}
                  <FormSection title="Timekeeper Information">
                    <FormField label="Requester:" />
                    <FormField label="Responsible Attorney:" />
                  </FormSection>

                  {/* Client Information */}
                  <FormSection title="Client Information">
                    <FormField label="Client Name:" />
                    <FormField label="Client Address:" />
                    <FormField label="Company Description:" isTextarea />
                    <FormField label="Client Industry:" />
                    <FormField
                      label="Client Contact:"
                      placeholder="Name, Title, email, phone"
                    />
                    <FormField label="Client Website:" />
                  </FormSection>

                  {/* Matter Information */}
                  <FormSection title="Matter Information">
                    <FormField label="Matter Name:" />
                    <FormField label="Matter Description:" isTextarea />
                    <FormField label="Matter Type:" />
                  </FormSection>

                  {/* Security */}
                  <FormSection title="Security">
                    <FormField label="Is this Client confidential?" isSelect />
                    <FormField label="Is this Matter confidential?" isSelect />
                  </FormSection>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable FormSection component
const FormSection = ({ title, children }) => (
  <section className="mb-6 sm:mb-8">
    <h2 className="text-lg sm:text-xl font-semibold bg-gray-100 p-2 sm:p-3 mb-3 sm:mb-4 rounded">
      {title}
    </h2>
    <div className="space-y-3 sm:space-y-4">{children}</div>
  </section>
);

// Reusable FormField component
const FormField = ({
  label,
  isTextarea = false,
  isSelect = false,
  placeholder = "",
}) => (
  <div className="flex flex-col sm:flex-row sm:items-start">
    <label className="w-full sm:w-1/3 py-2 px-3 sm:px-4 bg-gray-50 rounded-t sm:rounded-l sm:rounded-tr-none">
      {label}
    </label>
    <div className="w-full sm:w-2/3">
      {isTextarea ? (
        <textarea
          className="w-full border bg-white rounded-b sm:rounded-r sm:rounded-bl-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder={placeholder}
        />
      ) : isSelect ? (
        <select className="w-full border rounded-b sm:rounded-r sm:rounded-bl-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Y/N</option>
          <option>Y</option>
          <option>N</option>
        </select>
      ) : (
        <input
          type="text"
          className="w-full bg-white border rounded-b sm:rounded-r sm:rounded-bl-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
        />
      )}
    </div>
  </div>
);

export default ClientMatterDetails;
