import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle, MessageSquare } from "lucide-react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideNavBar />
      <div className="flex-1 lg:ml-64">
        {" "}
        {/* Margin only on larger screens */}
        <Header />
        <div className="max-w-4xl mx-auto p-4 lg:p-6 pt-16">
          {" "}
          {/* Adjusted padding for mobile */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold">HELP CENTER</h1>
            <Button variant="outline" className="w-full sm:w-auto">
              Open Support Ticket
            </Button>
          </div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl">
                Support and Feedback Section
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Help and Resources */}
                <section>
                  <h2 className="text-base lg:text-lg font-semibold mb-2">
                    1. Help and Resources
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    Purpose: Provide easy access to help and support resources.
                  </p>

                  <div className="space-y-6">
                    <h3 className="font-medium text-sm lg:text-base">
                      Components:
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm lg:text-base">
                            Help Center:
                          </p>
                          <p className="text-blue-500 hover:underline cursor-pointer text-sm lg:text-base">
                            Links to FAQs, user guides, and tutorials.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm lg:text-base">
                            Contact Support:
                          </p>
                          <p className="text-blue-500 hover:underline cursor-pointer text-sm lg:text-base">
                            Direct access to contact support via chat, email, or
                            phone.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 mt-1 text-blue-500 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm lg:text-base">
                            System Status:
                          </p>
                          <p className="text-blue-500 hover:underline cursor-pointer text-sm lg:text-base">
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
                  <h2 className="text-base lg:text-lg font-semibold mb-2">
                    2. Feedback and Suggestions
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm lg:text-base">
                    Purpose: Allow users to provide feedback on the software or
                    suggest new features.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-medium text-sm lg:text-base">
                      Components:
                    </h3>
                    <ul className="space-y-3 list-disc ml-4 lg:ml-6">
                      <li className="text-sm lg:text-base pl-1">
                        <span className="font-medium">Feedback Form: </span>
                        <span className="text-blue-500 hover:underline cursor-pointer">
                          A form to submit feedback directly within the
                          dashboard.
                        </span>
                      </li>
                      <li className="text-sm lg:text-base pl-1">
                        <span className="font-medium">Feature Requests: </span>
                        <span className="text-blue-500 hover:underline cursor-pointer">
                          A section to suggest and vote on new features or
                          enhancements.
                        </span>
                      </li>
                      <li className="text-sm lg:text-base pl-1">
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
