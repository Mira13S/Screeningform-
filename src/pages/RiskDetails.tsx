import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, MoreHorizontal, User2 } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const RiskAssessment = () => {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className="max-w-6xl mx-auto p-4 bg-white">
          {/* Header with notification */}
          {/* <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              <User2 size={16} className="text-gray-600" />
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User2 size={16} className="text-gray-600" />
          </div>
        </div>
      </div> */}

          {/* Risk Details Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Risk Details</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  ESCALATE
                </button>
                <button className="px-4 py-2 border rounded hover:bg-gray-50">
                  REJECT
                </button>
                <button className="px-4 py-2 border rounded bg-blue-50 text-blue-600 hover:bg-blue-100">
                  APPROVE
                </button>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-9 gap-4 text-sm mb-6">
              <div className="font-medium">Request</div>
              <div className="font-medium">Request Date</div>
              <div className="font-medium">Requester</div>
              <div className="font-medium">Responsible Attorney</div>
              <div className="col-span-2 font-medium">
                Client Name Matter Name
              </div>
              <div className="font-medium">Risk</div>
              <div className="font-medium">Client Number</div>
              <div className="font-medium">Matter Number</div>

              <div>222222-S</div>
              <div>19 May, 2021 10:10 AM</div>
              <div>Associate, Aaron</div>
              <div>Smith, John</div>
              <div className="col-span-2">
                <div>New Client</div>
                <div className="text-gray-500">New Matter</div>
              </div>
              <div>
                <AlertCircle size={16} className="text-yellow-500" />
              </div>
              <div>Pending</div>
              <div>Pending</div>
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
                      <div className="w-48 h-48 border-4 rounded-full flex items-center justify-center">
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
