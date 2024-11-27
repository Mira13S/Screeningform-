import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  BookUser,
  Building,
  FileCheck,
  Handshake,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <a href="/" className="flex items-center space-x-2">
            <BookUser className="h-6 w-6" />
            <span className="font-bold">Justice & Associates</span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Services
            </a>
            <Button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Justice & Associates Law Firm UPDATED!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Providing expert legal services with integrity and dedication.
                  Your trusted partner in navigating complex legal matters.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Schedule a Consultation</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Building className="h-10 w-10 mb-4 text-primary" />}
                title="Corporate Law"
                description="Expert guidance on business formation, mergers, acquisitions, and corporate governance."
              />
              <ServiceCard
                icon={<FileCheck className="h-10 w-10 mb-4 text-primary" />}
                title="Intellectual Property"
                description="Protect your innovations with our comprehensive IP services including patents, trademarks, and copyrights."
              />
              <ServiceCard
                icon={<Handshake className="h-10 w-10 mb-4 text-primary" />}
                title="Contract Law"
                description="Drafting, reviewing, and negotiating contracts to safeguard your interests and mitigate risks."
              />
              <ServiceCard
                icon={<BookOpen className="h-10 w-10 mb-4 text-primary" />}
                title="Civil Litigation"
                description="Skilled representation in civil disputes, from pre-trial negotiations to courtroom advocacy."
              />
              <ServiceCard
                icon={<BookUser className="h-10 w-10 mb-4 text-primary" />}
                title="Employment Law"
                description="Ensuring compliance and resolving workplace issues for both employers and employees."
              />
              <ServiceCard
                icon={<FileCheck className="h-10 w-10 mb-4 text-primary" />}
                title="Estate Planning"
                description="Comprehensive estate planning services to protect your assets and provide for your loved ones."
              />
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Schedule a consultation with our experienced attorneys to
                  discuss your legal needs.
                </p>
              </div>
              <Button size="lg">Schedule a Consultation</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    News & Press
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Corporate Law
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Civil Litigation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm hover:underline underline-offset-4"
                    href="#"
                  >
                    Legal Resources
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-1">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    123 Legal Street, Cityville, State 12345
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">info@justice-associates.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            © 2024 Justice & Associates. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: any;
  description: any;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col items-center text-center">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}