import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle, MessageSquare } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const HelpCenter = () => {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="flex-1 ml-64">
        {" "}
        {/* Add margin to account for fixed sidebar */}
        <Header />
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">HELP CENTER</h1>
            <Button variant="outline">Open Support Ticket</Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Support and Feedback Section</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Help and Resources */}
                <section>
                  <h2 className="text-lg font-semibold mb-2">
                    1. Help and Resources
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Purpose: Provide easy access to help and support resources.
                  </p>

                  <div className="ml-4 space-y-4">
                    <h3 className="font-medium">Components:</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium">Help Center:</p>
                          <p className="text-blue-500 hover:underline cursor-pointer">
                            Links to FAQs, user guides, and tutorials.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-5 h-5 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium">Contact Support:</p>
                          <p className="text-blue-500 hover:underline cursor-pointer">
                            Direct access to contact support via chat, email, or
                            phone.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Bell className="w-5 h-5 mt-1 text-blue-500" />
                        <div>
                          <p className="font-medium">System Status:</p>
                          <p className="text-blue-500 hover:underline cursor-pointer">
                            A live feed of the current system status, including
                            any known issues or maintenance notifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Feedback and Suggestions */}
                <section>
                  <h2 className="text-lg font-semibold mb-2">
                    2. Feedback and Suggestions
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Purpose: Allow users to provide feedback on the software or
                    suggest new features.
                  </p>

                  <div className="ml-4 space-y-4">
                    <h3 className="font-medium">Components:</h3>
                    <ul className="space-y-2 list-disc ml-6">
                      <li>
                        <span className="font-medium">Feedback Form: </span>
                        <span className="text-blue-500 hover:underline cursor-pointer">
                          A form to submit feedback directly within the
                          dashboard.
                        </span>
                      </li>
                      <li>
                        <span className="font-medium">Feature Requests: </span>
                        <span className="text-blue-500 hover:underline cursor-pointer">
                          A section to suggest and vote on new features or
                          enhancements.
                        </span>
                      </li>
                      <li>
                        <span className="font-medium">Surveys and Polls: </span>
                        <span className="text-blue-500 hover:underline cursor-pointer">
                          Participation in user experience surveys or quick
                          polls.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
