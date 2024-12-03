

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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <SideNavBar className="hidden md:block" />
      <div className="flex-1 md:ml-64">
        <Header />
        <div className="p-4 bg-white">
          {/* Risk Details Section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
              <h2 className="text-lg font-semibold">Risk Details</h2>
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

            {/* Mobile-friendly table view */}
            <div className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
              <div className="min-w-max bg-white rounded-lg shadow">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Request
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Request Date
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Requester
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Attorney
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Client/Matter
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Risk
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Conflicts
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Client Number
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Matter Number
                      </TableHead>
                      <TableHead className="font-semibold whitespace-nowrap">
                        Approval
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>222222-S</TableCell>
                      <TableCell>12 May 2024</TableCell>
                      <TableCell>Smith, John</TableCell>
                      <TableCell>Associate-Aaron</TableCell>
                      <TableCell>
                        <div>New Client</div>
                        <div className="text-gray-500">New Matter</div>
                      </TableCell>
                      <TableCell>
                        <StatusIcon type="risk" level="medium" size={24} />
                      </TableCell>
                      <TableCell>
                        <StatusIcon type="conflicts" level="low" size={24} />
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Pending</Badge>
                      </TableCell>
                      <TableCell>
                        <StatusIcon
                          type="approvals"
                          level="evaluation"
                          size={24}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Desktop table view */}
            {/* <div className="hidden md:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Request</TableHead>
                    <TableHead>Request Date</TableHead>
                    <TableHead>Requester</TableHead>
                    <TableHead>Responsible Attorney</TableHead>
                    <TableHead>Client Name Matter Name</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Conflicts</TableHead>
                    <TableHead>Client Number</TableHead>
                    <TableHead>Matter Number</TableHead>
                    <TableHead>Approval</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>222222-S</TableCell>
                    <TableCell>19 May, 2021 10:10 AM</TableCell>
                    <TableCell>Associate, Aaron</TableCell>
                    <TableCell>Smith, John</TableCell>
                    <TableCell>
                      <div>New Client</div>
                      <div className="text-gray-500">New Matter</div>
                    </TableCell>
                    <TableCell>
                      <StatusIcon type="risk" level="medium" size={24} />
                    </TableCell>
                    <TableCell>
                      <StatusIcon
                        type="conflicts"
                        level="evaluation"
                        size={24}
                      />
                    </TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>
                      <StatusIcon
                        type="approvals"
                        level="evaluation"
                        size={24}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div> */}

            {/* Tabs Section */}
            <Tabs defaultValue="assessment" className="mt-6">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="assessment">Assessment</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="scoreDetails">Score Details</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>

              <TabsContent value="assessment" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Gauge visualization */}
                      <div className="w-48 h-48 border-4 border-gray-300 rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-base font-semibold">
                            D&B Credit Score
                          </div>
                          <div className="text-sm text-gray-500">DUNS #</div>
                        </div>
                      </div>
                      {/* Score table */}
                      <div className="flex-1 w-full overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Risk Factor</TableHead>
                              <TableHead>Risk Level</TableHead>
                              <TableHead>Score</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>D&B Delinquency Predictor</TableCell>
                              <TableCell className="text-orange-500">
                                Med
                              </TableCell>
                              <TableCell>389</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>D&B PAYDEX Score</TableCell>
                              <TableCell className="text-orange-500">
                                Med
                              </TableCell>
                              <TableCell>65</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>D&B Financial Stress Score</TableCell>
                              <TableCell className="text-red-500">
                                High
                              </TableCell>
                              <TableCell>1430</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comments" className="mt-4">
                <div className="p-4 space-y-6 border-4 rounded-lg">
                  {comments.map((comment) => (
                    <div key={comment.id} className="space-y-3">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10 bg-gray-200">
                            <AvatarFallback>
                              <User2 className="w-6 h-6 text-gray-400" />
                            </AvatarFallback>
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
                      <div className="text-sm text-gray-600 pl-0 md:pl-13">
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
