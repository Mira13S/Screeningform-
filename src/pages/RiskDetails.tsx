import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, MoreHorizontal, User2 } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import { StatusIcon } from "@/components/StatusIcon";
import { useNavigate } from "react-router-dom";

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
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className=" mx-auto p-4 bg-white">
          {/* max-w-6xl */}
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
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-sm mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 font-medium text-left">Request</th>
                    <th className="px-4 py-2 font-medium text-left">
                      Request Date
                    </th>
                    <th className="px-4 py-2 font-medium text-left">
                      Requester
                    </th>
                    <th className="px-4 py-2 font-medium text-left">
                      Responsible Attorney
                    </th>
                    <th className="px-4 py-2 font-medium text-left col-span-2">
                      Client Name Matter Name
                    </th>
                    <th className="px-4 py-2 font-medium text-left">Risk</th>
                    <th className="px-4 py-2 font-medium text-left">
                      Conflicts
                    </th>
                    <th className="px-4 py-2 font-medium text-left">
                      Client Number
                    </th>
                    <th className="px-4 py-2 font-medium text-left">
                      Matter Number
                    </th>
                    <th className="px-4 py-2 font-medium text-left">
                      Approval
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">222222-S</td>
                    <td className="border px-4 py-2">19 May, 2021 10:10 AM</td>
                    <td className="border px-4 py-2">Associate, Aaron</td>
                    <td className="border px-4 py-2">Smith, John</td>
                    <td className="border px-4 py-2 col-span-2">
                      <div>New Client</div>
                      <div className="text-gray-500">New Matter</div>
                    </td>
                    <td
                      className="border px-4 py-2"                    >
                      <StatusIcon type="risk" level="medium" size={24} />
                    </td>
                    <td
                      className="border px-4 py-2"
                    >
                      <StatusIcon
                        type="conflicts"
                        level="evaluation"
                        size={24}
                      />
                    </td>
                    <td className="border px-4 py-2">Pending</td>
                    <td className="border px-4 py-2">Pending</td>
                    <td className="border px-4 py-2">
                      <StatusIcon
                        type="approvals"
                        level="evaluation"
                        size={24}
                      />
                    </td>
                  </tr>
                  {/* Add more rows dynamically here */}
                </tbody>
              </table>
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
