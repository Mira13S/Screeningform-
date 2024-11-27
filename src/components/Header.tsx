import React from "react";
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

function Header() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <nav className="ml-auto flex gap-4 sm:gap-6"></nav>
      </div>
    </header>
  );
}
export default Header;
