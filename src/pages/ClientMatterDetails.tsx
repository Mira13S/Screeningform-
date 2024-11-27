import React from "react";
import { Card } from "@/components/ui/card";
import { Upload } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const ClientMatterDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className="w-full h-screen p-4 bg-gray-50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-xl font-bold">Client/Matter Details</h1>
            </div>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-200 ml-auto"
                onClick={() => navigate("/clientmatterchange")}
              >
                RequestChanges
              </button>
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-200 ml-auto"
                onClick={() => navigate("/")}
              >
                Print
              </button>
            </div>
          </div>

          {/* Header Information */}
          <div className="grid grid-cols-6 gap-4 mb-6 text-sm">
            <div>
              <div className="font-semibold">Request</div>
              <div>2222221</div>
            </div>
            <div>
              <div className="font-semibold">Request Date</div>
              <div>19 May, 2021</div>
            </div>
            <div>
              <div className="font-semibold">Requester</div>
              <div>Smith, John</div>
            </div>
            <div>
              <div className="font-semibold">Responsible Attorney</div>
              <div>Associate, Aaron</div>
            </div>
            <div>
              <div className="font-semibold">Client Name</div>
              <div>New Client</div>
            </div>
            <div>
              <div className="font-semibold">Matter Number</div>
              <div>1111</div>
            </div>
          </div>

          {/* Main Content Split */}
          <div className="flex gap-6">
            {/* Left Side - Scan/Upload Section */}
            <div className="w-1/3">
              <Card className="h-[600px] p-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-full flex flex-col items-center justify-center p-4">
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">
                      Drag & Drop or Upload Files Here
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Upload PDF, DOC, DOCX, or image files
                    </p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Choose Files
                    </button>
                  </div>
                  <div className="w-full mt-8">
                    <h4 className="font-semibold mb-2">
                      List of Emails or Documents
                    </h4>
                    <div className="border rounded p-2 h-40 overflow-y-auto">
                      {/* Upload list will appear here */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Side - Form */}
            <div className="w-2/3">
              <Card className="h-[600px]">
                <div className="h-full overflow-y-auto p-4">
                  {/* Timekeeper Information */}
                  <section className="mb-6">
                    <h2 className="font-semibold bg-gray-100 p-2">
                      Timekeeper Information
                    </h2>
                    <table className="w-full mt-2">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Requester:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Responsible Attorney:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full border rounded p-1 bg-white"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  {/* Client Information */}
                  <section className="mb-6">
                    <h2 className="font-semibold bg-gray-100 p-2">
                      Client Information
                    </h2>
                    <table className="w-full mt-2">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Client Name:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Client Address:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Company Description:
                          </td>
                          <td className="py-2 px-4">
                            <textarea
                              className="w-full border bg-white rounded p-1"
                              rows="3"
                            ></textarea>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Client Industry:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Client Contact:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                              placeholder="Name, Title, email, phone"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Client Website:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  {/* Matter Information */}
                  <section className="mb-6">
                    <h2 className="font-semibold bg-gray-100 p-2">
                      Matter Information
                    </h2>
                    <table className="w-full mt-2">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Matter Name:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Matter Description:
                          </td>
                          <td className="py-2 px-4">
                            <textarea
                              className="w-full border bg-white rounded p-1"
                              rows="3"
                            ></textarea>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Matter Type:
                          </td>
                          <td className="py-2 px-4">
                            <input
                              type="text"
                              className="w-full bg-white border rounded p-1"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  {/* Security */}
                  <section className="mb-6">
                    <h2 className="font-semibold bg-gray-100 p-2">Security</h2>
                    <table className="w-full mt-2">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Is this Client confidential?
                          </td>
                          <td className="py-2 px-4">
                            <select className="border rounded p-1">
                              <option>Y/N</option>
                              <option>Y</option>
                              <option>N</option>
                            </select>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 w-1/3 bg-gray-50">
                            Is this Matter confidential?
                          </td>
                          <td className="py-2 px-4">
                            <select className="border rounded p-1">
                              <option>Y/N</option>
                              <option>Y</option>
                              <option>N</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMatterDetails;
