import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Navigate, useNavigate } from "react-router-dom";
import { StatusIcon } from "@/components/StatusIcon";

import { useMutation } from "@apollo/client";
import { CREATE_CLIENT, CREATE_MATTER } from "@/queries";
import { useState } from "react";
import { FaAffiliatetheme } from "react-icons/fa";

// const TopTable = () => {
//   const navigate= useNavigate();
//   return (
//     <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
//       <div className="min-w-max bg-white rounded-lg shadow">
//         {/* Large Screen Table */}
//         <div className="hidden md:block">
//           <Table>
//             <TableHeader>
//               <TableRow>
//               <TableHead className="font-bold whitespace-nowrap px-6 text-black">Request</TableHead>
//               <TableHead className="font-bold whitespace-nowrap px-6 text-black">Request Date</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Requester</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Responsible Attorney</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Client Name/Matter Name</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Risk</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Conflicts</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black">Client Number</TableHead>
//               <TableHead className="font-semibold whitespace-nowrap px-6 text-black"></TableHead>

//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow className="hover:bg-gray-50">
//                 <TableCell className="px-6 py-4">222222-S</TableCell>
//                 <TableCell className="px-6 py-4">19 May 2021</TableCell>
//                 <TableCell className="px-6 py-4">Smith, John</TableCell>
//                 <TableCell className="px-6 py-4">Associate, Aaron</TableCell>
//                 <TableCell className="px-6 py-4">
//                   <div>New Client</div>
//                   <div className="text-gray-500 mt-1">New Matter</div>
//                 </TableCell>
//                 <TableCell className="px-6 py-4">
//                   <StatusIcon type="risk" level="medium" size={24} />
//                 </TableCell>
//                 <TableCell className="px-6 py-4">
//                   <StatusIcon type="conflicts" level="low" size={24} />
//                 </TableCell>
//                 <TableCell className="px-6 py-4">
//                   <Badge variant="secondary">Pending</Badge>
//                 </TableCell>
//                 <TableCell className="px-6 py-4 flex justify-center">
//   <button className="ml-4 px-7 py-3 bg-gray-300 text-black rounded-md hover:bg-gray-400" onClick={()=> navigate("/intake")}>
//     Start Intake
//   </button>
// </TableCell>

//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>

//         {/* Mobile Screen Table - Single table with horizontal scroll */}
//         <div className="block md:hidden overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="font-semibold whitespace-nowrap px-6">Field</TableHead>
//                 <TableHead className="font-semibold whitespace-nowrap px-6">Request 1</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Request</TableHead>
//                 <TableCell className="px-6 py-4">222222-S</TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Request Date</TableHead>
//                 <TableCell className="px-6 py-4">19 May 2021</TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Requester</TableHead>
//                 <TableCell className="px-6 py-4">Smith, John</TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Attorney</TableHead>
//                 <TableCell className="px-6 py-4">Associate, Aaron</TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Client/Matter</TableHead>
//                 <TableCell className="px-6 py-4">
//                   <div>New Client</div>
//                   <div className="text-gray-500 mt-1">New Matter</div>
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Risk</TableHead>
//                 <TableCell className="px-6 py-4">
//                   <StatusIcon type="risk" level="medium" size={24} />
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Conflicts</TableHead>
//                 <TableCell className="px-6 py-4">
//                   <StatusIcon type="conflicts" level="low" size={24} />
//                 </TableCell>
//               </TableRow>
//               <TableRow className="hover:bg-gray-50">
//                 <TableHead className="font-semibold px-6 py-4">Client Number</TableHead>
//                 <TableCell className="px-6 py-4">
//                   <Badge variant="secondary">Pending</Badge>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };
const referralSources = [
  "Referral from Attorney",
  "Referral from Client",
  "Referral from Event",
  "Online Search",
  "Social Media",
  "Other",
];

const clientIndustry = ["Business", "Managemnet", "Fashion"];

const matterType = ["Internal", "External"];

const areaofpractise = ["Heathcare", "Finance", "Civil", "IT"];

const jurisdiction = ["ABC"];

const relatedPartyType = ["Business", "HealthCare"];
const affiliation = ["ABS"];
const relationship = ["Strong"];
 
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

const CustomSelect = ({
  options = ["Select One"],
  className = "",
  value,
  onChange,
  name,
}: {
  options: string[];
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string; // Add name prop here
}) => {
  return (
    <div className="relative inline-block w-full">
      <select
        name={name} // Set the name attribute to match the form data
        value={value} // Bind the select value to the parent state
        onChange={onChange} // Handle the change event
        className={`appearance-none w-full px-2 py-1 pr-8 border border-gray-300 bg-white text-gray-700 
        rounded-none focus:outline-none ${className}`}
        style={{
          borderRight: "none", // Remove right border for split effect
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Custom dropdown button/arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-white border border-gray-300">
        <svg
          className="fill-current h-4 w-4 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

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

  const [formData, setFormData] = useState({
    requester: "",
    responsibleAttorney: "",
    clientName: "",
    clientAddress: "",
    clientDescription: "",
    ownership: "",
    clientReferralSource: "",
    clientIndustry: "",
    clientContactName: "",
    clientContactTitle: "",
    clientContactEmail: "",
    clientContactPhone: "",
    clientWebsite: "",
    clientDUNS: "",
    matterName: "",
    matterDescription: "",
    matterType: "",
    areaOfPractice: "",
    jurisdiction: "",
    relatedClientInformation: "",
    relatedPartyName: "",
    relatedPartyType: "",
    affiliation: "",
    relationship: "",
    isPayorAsideFromClient: false,
    areMultiplePayors: false,
    addPayor: "",
    estimatedFees: 0,
    depositRequested: 0,
    willDepositBeReplenished: false,
    isClientConfidential: false,
    isMatterConfidential: false,
  });

  const [createClient] = useMutation(CREATE_CLIENT);
  const [createMatter] = useMutation(CREATE_MATTER);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: String, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    try {
      //create client
      const { data: clientData } = await createClient({
        variables: {
          input: {
            clientName: formData.clientName,
            clientAddress: formData.clientAddress,
            clientDescription: formData.clientDescription,
            ownership: formData.ownership,
            clientReferralSource: formData.clientReferralSource,
            clientIndustry: formData.clientIndustry,
            clientContactName: formData.clientContactName,
            clientContactTitle: formData.clientContactTitle,
            clientContactEmail: formData.clientContactEmail,
            clientContactPhone: parseInt(formData.clientContactPhone),
            clientWebsite: formData.clientWebsite,
            clientDUNS: formData.clientDUNS,
          },
        },
      });

      const { data: matterData } = await createMatter({
        variables: {
          input: {
            requester: formData.requester,
            responsibleAttorney: formData.responsibleAttorney,
            matterName: formData.matterName,
            matterDescription: formData.matterDescription,
            matterType: formData.matterType,
            areaOfPractice: formData.areaOfPractice,
            jurisdiction: formData.jurisdiction,
            relatedClientInformation: formData.relatedClientInformation,
            relatedPartyName: formData.relatedPartyName,
            relatedPartyType: formData.relatedPartyType,
            affiliation: formData.affiliation,
            relationship: formData.relationship,
            isPayorAsideFromClient: formData.isPayorAsideFromClient,
            areMultiplePayors: formData.areMultiplePayors,
            addPayor: formData.addPayor,
            estimatedFees: formData.estimatedFees,
            depositRequested: formData.depositRequested,
            willDepositBeReplenished: formData.willDepositBeReplenished,
            isClientConfidential: formData.isClientConfidential,
            isMatterConfidential: formData.isMatterConfidential,
            clientId: clientData.createClient.id,
          },
        },
      });

      navigate("/intake");
    } catch (error) {
      console.error("Erroe creating client or matter", error);
    }
  }
    
    return (
      <div className="flex flex-col lg:flex-row">
        {/* Side Navigation - Hidden on smaller screens, slide-out on mobile */}
        <div className="lg:fixed lg:top-0 lg:left-0 lg:h-full lg:z-40">
          <SideNavBar />
        </div>

        {/* Main content with proper margin to prevent navbar overlap */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
          <Header className="z-30" />
          <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden overflow-y-auto">
            {/* Header with buttons - Responsive layout */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <h1 className="text-xl font-bold">Screening Form</h1>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto px-7 py-3 bg-gray-200 text-black rounded-md hover:bg-gray-400"
                  onClick={handleSubmit}
                >
                  Save Form
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-gray-400 whitespace-nowrap"
                  onClick={() => navigate("/intake")}
                >
                  Submit Request and Start Intake Form
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full md:w-auto px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-gray-400 whitespace-nowrap"
                  onClick={() => navigate("/")}
                >
                  Submit Request
                </Button>
              </div>
            </div>

            {/* Status Table - Now with horizontal scroll on smaller screens
          <TopTable /> */}

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

              {/* Right Column - Comprehensive Form */}
              <div>
                <Card className="bg-white">
                  <CardContent className="p-0">
                    {/* Blue header section */}
                    <div className="bg-blue-100 p-4 border-b">
                      <p className="text-sm">
                        Please confirm and complete the information below before
                        submitting form.
                      </p>
                    </div>

                    {/* Form content */}
                    <div className="p-4">
                      {/* Timekeeper Information */}
                      <div className="mb-4">
                        <h3 className="font-semibold bg-gray-200 p-2">
                          Timekeeper Information
                        </h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">Requester:</td>
                              <td className="text-gray-500 italic">
                                $user(populated based on log in)
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Responsible Attorney:
                              </td>
                              <td>
                                <CustomSelect options={["Select One"]} />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Client Information */}
                      <div className="mb-4">
                        {/* <h3 className="font-semibold bg-gray-200 p-2">Client Information</h3>
                      <div className="py-2 px-2 bg-gray-100">
                        <span className="text-gray-600">Client Number:</span>
                        <span className="ml-2 text-gray-500 italic">[Client Number, if/when assigned]</span>
                      </div> */}
                        <div className="flex justify-between items-center bg-gray-200 p-2">
                          <h3 className="font-semibold">Client Information</h3>
                          <div className="flex justify-left">
                            <span className="text-gray-600 mr-2">
                              Client Number:
                            </span>
                            <span className="text-gray-500 italic justify-left">
                              [Client Number, if/when assigned]
                            </span>
                          </div>
                        </div>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">Client Name:</td>
                              <td>
                                <Input
                                  name="clientName"
                                  value={formData.clientName}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Client Address:</td>
                              <td>
                                <Input
                                  name="clientAddress"
                                  value={formData.clientAddress}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Client Description:</td>
                              <td>
                                <Input
                                  name="clientDescription"
                                  value={formData.clientDescription}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Ownership</td>
                              <td>
                                <Input
                                  name="ownership"
                                  value={formData.ownership}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>

                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Client Referral Source:
                              </td>
                              <td>
                                <CustomSelect
                                  name="clientReferralSource"
                                  options={referralSources} // Pass the list of options
                                  value={formData.clientReferralSource} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                  // Name to track field in formData
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Client Industry:</td>
                              <td>
                                <CustomSelect
                                  name="clientIndustry"
                                  options={clientIndustry} // Pass the list of options
                                  value={formData.clientIndustry} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                  // Name to track field in formData
                                />
                              </td>
                            </tr>
                            {/* <tr className="border-b">
                            <td className="py-2 pr-2">Client Contact:</td>
                            <td className="text-gray-500 italic">Name, Title, email, phone</td>
                          </tr> */}
                            <tr className="border-b">
                              <td className="py-2 pr-2 align-top">
                                Client Contact:
                              </td>
                              <td>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm text-gray-600 mb-1 block">
                                      Name
                                    </label>
                                    <Input
                                      name="clientContactName"
                                      value={formData.clientContactName}
                                      onChange={handleChange}
                                      className="h-8"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm text-gray-600 mb-1 block">
                                      Title
                                    </label>
                                    <Input
                                      name="clientContactTitle"
                                      value={formData.clientContactTitle}
                                      onChange={handleChange}
                                      className="h-8"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm text-gray-600 mb-1 block">
                                      Email
                                    </label>
                                    <Input
                                      name="clientContactEmail"
                                      value={formData.clientContactEmail}
                                      onChange={handleChange}
                                      className="h-8"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm text-gray-600 mb-1 block">
                                      Phone
                                    </label>
                                    <Input
                                      name="clientContactPhone"
                                      value={formData.clientContactPhone}
                                      onChange={handleChange}
                                      className="h-8"
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>

                            <tr className="border-b">
                              <td className="py-2 pr-2">Client Website:</td>
                              <Input
                                name="clientWebsite"
                                value={formData.clientWebsite}
                                onChange={handleChange}
                                className="h-8"
                              />
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Client DUNS#:</td>
                              <td>
                                <Input
                                  name="clientDUNS"
                                  value={formData.clientDUNS}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Matter Information */}
                      <div className="mb-4">
                        <h3 className="font-semibold bg-gray-200 p-2">
                          Matter Information
                        </h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">Matter Name:</td>
                              <td>
                                <Input
                                  name="matterName"
                                  value={formData.matterName}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Matter Description:</td>
                              <td>
                                <Input
                                  name="matterDescription"
                                  value={formData.matterDescription}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Matter Type:</td>
                              <td>
                                <CustomSelect
                                  name="matterType"
                                  options={matterType} // Pass the list of options
                                  value={formData.matterType} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Area of Practice:</td>
                              <td>
                                <CustomSelect
                                  name="areaOfPractice"
                                  options={areaofpractise} // Pass the list of options
                                  value={formData.areaOfPractice} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Jurisdiction</td>
                              <td>
                                <CustomSelect
                                  name="jurisdiction"
                                  options={jurisdiction} // Pass the list of options
                                  value={formData.jurisdiction} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Related Parties */}
                      <div className="mb-4">
                        <h3 className="font-semibold bg-gray-200 p-2">
                          Related Parties
                        </h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">
                                Related Client Information:
                              </td>
                              <td>
                                <Input
                                  name="relatedClientInformation"
                                  value={formData.relatedClientInformation}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Related Party Name:</td>
                              <td>
                                <Input
                                  name="relatedPartyName"
                                  value={formData.relatedPartyName}
                                  onChange={handleChange}
                                  className="h-8"
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Related Party Type:</td>
                              <td>
                                <CustomSelect
                                  name="relatedPartyType"
                                  options={relatedPartyType} // Pass the list of options
                                  value={formData.relatedPartyType} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Affiliation:</td>
                              <td>
                                <CustomSelect
                                  name="affiliation"
                                  options={affiliation} // Pass the list of options
                                  value={formData.affiliation} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Relationship:</td>
                              <td>
                                {" "}
                                <CustomSelect
                                  name="relationship"
                                  options={relationship} // Pass the list of options
                                  value={formData.relationship} // Bind the selected value to formData
                                  onChange={handleChange} // Handle changes
                                />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Is there a payor aside from the Client?
                              </td>
                              <td>
                                <Input
                                  name="isPayorAsideFromClient"
                                  value={
                                    formData.isPayorAsideFromClient ? "Y" : "N"
                                  }
                                  onChange={handleChange}
                                  className="h-8"
                                  placeholder="Y/N"
                                />{" "}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Are there multiple payors on this matter?
                              </td>
                              <td>
                                <Input
                                  name="areMultiplePayors"
                                  value={formData.areMultiplePayors ? "Y" : "N"}
                                  onChange={handleChange}
                                  className="h-8"
                                  placeholder="Y/N"
                                />{" "}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Add Payor:</td>
                              <td>
                                <Input
                                  name="addPayor"
                                  value={formData.addPayor}
                                  onChange={handleChange}
                                  className="h-8"
                                  placeholder="if yes"
                                />{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Security Deposit Section */}
                      <div className="mb-4">
                        <h3 className="font-semibold bg-gray-200 p-2">
                          Security Deposit
                        </h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">
                                Estimated Fees:
                              </td>
                              <td className="text-gray-500 italic">
                                [drop down?]
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">Deposit Requested:</td>
                              <td>$$$</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Will deposit be replenished?
                              </td>
                              <td>
                                <Input className="h-8" placeholder="Y/N" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Security Section */}
                      <div className="mb-4">
                        <h3 className="font-semibold bg-gray-200 p-2">
                          Security
                        </h3>
                        <table className="w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-2 w-1/3">
                                Is this Client confidential?
                              </td>
                              <td>
                                <Input className="h-8" placeholder="Y/N" />
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-2">
                                Is this Matter confidential?
                              </td>
                              <td>
                                <Input className="h-8" placeholder="Y/N" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
