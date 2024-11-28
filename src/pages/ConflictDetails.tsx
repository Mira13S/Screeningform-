import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AlertCircle, Check, MoreVertical } from "lucide-react";

const Conflicts = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Conflicts Details</h1>
        <div className="flex gap-2">
          <Button variant="outline">ESCALATE</Button>
          <Button variant="outline">REJECT</Button>
          <Button variant="default">APPROVE</Button>
        </div>
      </div>

      {/* Main Info Card */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-9 gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Request</span>
              <span>222222-S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Request Date</span>
              <span>19 May, 2021 10:10 AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Requester</span>
              <span>Associate, Aaron</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">
                Responsible Attorney
              </span>
              <span>Smith, John</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-sm text-gray-500">
                Client Name Matter Name
              </span>
              <span>New Client New Matter</span>
            </div>
            <div className="flex items-center">
              <AlertCircle className="text-yellow-500" size={24} />
            </div>
            <div className="flex items-center justify-center">
              <Button variant="ghost" size="icon">
                <MoreVertical size={20} />
              </Button>
            </div>
            <div className="flex items-center justify-end">
              <Button variant="ghost" size="icon">
                <MoreVertical size={20} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="search" className="w-full">
        <TabsList>
          <TabsTrigger value="search">Search Results</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="search" className="mt-4">
          <Button variant="outline" size="sm" className="mb-4">
            Clear Selected
          </Button>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-2"></th>
                  <th className="p-2">Severity</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Client Matter Party</th>
                  <th className="p-2">Client Status</th>
                  <th className="p-2">Matter Status</th>
                  <th className="p-2">Matched Value</th>
                  <th className="p-2">Relationship Analysis</th>
                  <th className="p-2">Nature of Conflict</th>
                  <th className="p-2">Responsible Attorney</th>
                  <th className="p-2">Waiver</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">
                    <AlertCircle className="text-red-500" size={20} />
                  </td>
                  <td className="p-2">Direct</td>
                  <td className="p-2">Client Matter Party</td>
                  <td className="p-2">Closed/Open, Last WIP</td>
                  <td className="p-2">Closed/Open, Last WIP</td>
                  <td className="p-2">Name matched</td>
                  <td className="p-2">
                    Related Party Relationship, Party Type, Affiliation
                  </td>
                  <td className="p-2">
                    Client/Matter/Contact/Payor/etc Field match found
                  </td>
                  <td className="p-2">Smith, John</td>
                  <td className="p-2">
                    <Button variant="ghost" size="icon">
                      <Check size={20} />
                    </Button>
                  </td>
                  <td className="p-2">Obtain Waiver</td>
                </tr>
                {/* Additional rows would go here */}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="default" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              4
            </Button>
            <Button variant="outline" size="sm">
              5
            </Button>
            <span>...</span>
            <Button variant="outline" size="sm">
              20
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="parameters">
          {/* Parameters content would go here */}
        </TabsContent>

        <TabsContent value="comments">
          {/* Comments content would go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Conflicts;
