"use client";

import React from "react";
import { ChevronDown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

// This would typically come from an API or state management
const screeningsData = [
  {
    request: "111111-S",
    requestDate: "19 May, 2021 : 10:10 AM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Good Client 2024 General Matter",
    risk: "low",
    conflicts: "none",
    clientNumber: "11111",
  },
  {
    request: "222222-S",
    requestDate: "18 May, 2021 : 3:12 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "New Client New Matter",
    risk: "medium",
    conflicts: "pending",
    clientNumber: "Pending",
  },
  {
    request: "333333-S",
    requestDate: "17 May, 2021 : 2:15 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Denied Client General Matter",
    risk: "high",
    conflicts: "conflict",
    clientNumber: "Pending",
  },
];

const intakeRequestsData = [
  {
    request: "111111-I",
    requestDate: "19 May, 2021 : 10:10 AM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Good Client 2024 General Matter",
    risk: "low",
    conflicts: "none",
    clientNumber: "11111",
    matterNumber: "1111",
    approval: "approved",
  },
  {
    request: "222222-I",
    requestDate: "18 May, 2021 : 3:12 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "New Client New Matter",
    risk: "medium",
    conflicts: "pending",
    clientNumber: "Pending",
    matterNumber: "Pending",
    approval: "pending",
  },
  {
    request: "333333-I",
    requestDate: "17 May, 2021 : 2:15 PM",
    requester: "Associate, Aaron",
    responsibleAttorney: "Smith, John",
    clientNameMatterName: "Denied Client General Matter",
    risk: "high",
    conflicts: "conflict",
    clientNumber: "N/A",
    matterNumber: "N/A",
    approval: "denied",
  },
];

const RiskIcon = ({ risk }: { risk: string }) => {
  const colors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`w-6 h-6 rounded-full ${colors[risk as keyof typeof colors]}`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{risk} Risk</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ConflictsIcon = ({ conflicts }: { conflicts: string }) => {
  const icons = {
    none: "bg-green-500",
    pending: "bg-yellow-500",
    conflict: "bg-red-500",
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`w-6 h-6 rounded-full ${icons[conflicts as keyof typeof icons]}`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{conflicts}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ApprovalIcon = ({ approval }: { approval: string }) => {
  const icons = {
    approved: <div className="w-6 h-6 rounded-full bg-green-500" />,
    pending: <div className="w-6 h-6 rounded-full bg-gray-300" />,
    denied: (
      <div className="w-6 h-6 text-red-500">
        <Trash2 />
      </div>
    ),
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icons[approval as keyof typeof icons]}</TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{approval}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export function RequestStatus() {
  return (
    <div>
      <Header />
      <SideNavBar />
      <div className="container mx-auto p-4 ml-64">
        <h1 className="text-2xl font-bold mb-4">REQUESTS STATUS</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Screenings</h2>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
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
                  <TableHead>Action</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {screeningsData.map((item) => (
                  <TableRow key={item.request}>
                    <TableCell>{item.request}</TableCell>
                    <TableCell>{item.requestDate}</TableCell>
                    <TableCell>{item.requester}</TableCell>
                    <TableCell>{item.responsibleAttorney}</TableCell>
                    <TableCell>{item.clientNameMatterName}</TableCell>
                    <TableCell>
                      <RiskIcon risk={item.risk} />
                    </TableCell>
                    <TableCell>
                      <ConflictsIcon conflicts={item.conflicts} />
                    </TableCell>
                    <TableCell>{item.clientNumber}</TableCell>
                    <TableCell>
                      <Button variant="outline">
                        {item.risk === "high"
                          ? "Complete Intake"
                          : "Start Intake"}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="ghost" size="sm">
              2
            </Button>
            <Button variant="ghost" size="sm">
              3
            </Button>
            <Button variant="ghost" size="sm">
              4
            </Button>
            <Button variant="ghost" size="sm">
              5
            </Button>
            <Button variant="ghost" size="sm">
              ...
            </Button>
            <Button variant="ghost" size="sm">
              20
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Intake Requests</h2>
          <div className="overflow-x-auto border border-gray-300 rounded-lg">
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
                {intakeRequestsData.map((item) => (
                  <TableRow key={item.request}>
                    <TableCell>{item.request}</TableCell>
                    <TableCell>{item.requestDate}</TableCell>
                    <TableCell>{item.requester}</TableCell>
                    <TableCell>{item.responsibleAttorney}</TableCell>
                    <TableCell>{item.clientNameMatterName}</TableCell>
                    <TableCell>
                      <RiskIcon risk={item.risk} />
                    </TableCell>
                    <TableCell>
                      <ConflictsIcon conflicts={item.conflicts} />
                    </TableCell>
                    <TableCell>{item.clientNumber}</TableCell>
                    <TableCell>{item.matterNumber}</TableCell>
                    <TableCell>
                      <ApprovalIcon approval={item.approval} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
