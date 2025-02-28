"use client";

import { SidebarProvider } from "@/context/sidebar-context";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Bell, ChevronDown, Search } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-6">
          <Header />
          <WelcomeBanner />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="relative w-96">
        <Input
          type="text"
          placeholder="Search here..."
          className="pl-10 border-none bg-white rounded-full shadow-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="font-medium">John Doe</span>
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

function WelcomeBanner() {
  return (
    <Card className="bg-[#6C5CE7] text-white p-6 mb-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-2">Hi John, Good Afternoon!</h2>
        <p>Always stay updated in student portal</p>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3">
        <img
          src="/edu-illustration.jpg"
          alt="Educational Items"
          className="h-full w-full object-cover"
        />
      </div>
    </Card>
  );
}