import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SideNavBar from "@/components/SideNavBar";

export function Home() {
  const navigate = useNavigate();

  const worklist = [
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
      approval: "pending",
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
      clientNumber: "Pending",
      matterNumber: "Pending",
      approval: "pending",
    },
  ];
  const handleFirstClick = () => {
    navigate("/requeststatus");
  };
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-4">
                <ServiceCard
                  title="Screenings in Process"
                  description="3"
                  onClick={handleFirstClick}
                />
                <ServiceCard
                  title="Intake Requests in Progress"
                  description="17"
                  onClick={handleFirstClick}
                />
                <ServiceCard
                  title="New Matters"
                  description="132"
                  onClick={() => navigate("/report")}
                />
                <ServiceCard
                  title="New Clients"
                  description="60"
                  onClick={() => navigate("/report")}
                />
              </div>
            </div>
          </section>
          <section
            id="worklist"
            className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Worklist
                  </h2>
                  <div className="flex space-x-2">
                    <Button>Escalate</Button>
                    <Button>Reject</Button>
                    <Button>Approve</Button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">Request</th>
                        <th className="px-4 py-2">Request Date</th>
                        <th className="px-4 py-2">Requester</th>
                        <th className="px-4 py-2">Responsible Attorney</th>
                        <th className="px-4 py-2">Client Name Matter Name</th>
                        <th className="px-4 py-2">Risk</th>
                        <th className="px-4 py-2">Conflicts</th>
                        <th className="px-4 py-2">Client Number</th>
                        <th className="px-4 py-2">Matter Number</th>
                        <th className="px-4 py-2">Approval</th>
                      </tr>
                    </thead>
                    <tbody>
                      {worklist.map((item, index) => (
                        <tr key={index}>
                          <td
                            className="border px-4 py-2"
                            onClick={() => navigate("/clientmatterdetails")}
                          >
                            {item.request}
                          </td>
                          <td className="border px-4 py-2">
                            {item.requestDate}
                          </td>
                          <td className="border px-4 py-2">{item.requester}</td>
                          <td className="border px-4 py-2">
                            {item.responsibleAttorney}
                          </td>
                          <td className="border px-4 py-2">
                            {item.clientNameMatterName}
                          </td>
                          <td className="border px-4 py-2">{item.risk}</td>
                          <td
                            className="border px-4 py-2"
                            onClick={() => navigate("/conflictdetails")}
                          >
                            {item.conflicts}
                          </td>
                          <td className="border px-4 py-2">
                            {item.clientNumber}
                          </td>
                          <td className="border px-4 py-2">
                            {item.matterNumber}
                          </td>
                          <td className="border px-4 py-2">{item.approval}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string | number;
  onClick?: () => void; // Make onClick optional
}) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-200 transition"
    >
      <CardHeader>
        <CardTitle className="flex flex-col text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-4xl">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
