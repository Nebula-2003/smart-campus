'use client';

import React from "react";
import Link from "next/link";
import {
  Bell,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  Home,
  Menu,
  Settings,
  Users,
  ClipboardList,
  BarChart
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// 👇 Role-based navigation configuration
const navItemsByRole = {
  student: [
    { href: "/dashboard/student", icon: Home, label: "My Profile" },
    { href: "/dashboard/student/daily-updates", icon: Calendar, label: "Daily Updates" },
    { href: "#", icon: FileText, label: "Assignments" },
    { href: "#", icon: CreditCard, label: "Fee Transaction" },
    { href: "#", icon: Bell, label: "Notifications" },
    { href: "#", icon: Settings, label: "Settings" },
  ],
  teacher: [
    { href: "/dashboard/teacher", icon: Home, label: "Dashboard" },
    { href: "/dashboard/teacher/announcements", icon: Calendar, label: "Announcements" },
    { href: "#", icon: ClipboardList, label: "Assignments Review" },
    { href: "#", icon: Bell, label: "Alerts" },
    { href: "#", icon: Settings, label: "Settings" },
  ],
  admin: [
    { href: "/dashboard/admin", icon: Home, label: "Admin Panel" },
    { href: "#", icon: Users, label: "Manage Users" },
    { href: "#", icon: BarChart, label: "Reports" },
    { href: "#", icon: CreditCard, label: "Transactions" },
    { href: "#", icon: Bell, label: "Notifications" },
    { href: "#", icon: Settings, label: "Settings" },
  ],
};

function SidebarDemo({ children, role = "student" }) {
  const navItems = navItemsByRole[role] || [];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">EduPortal</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <item.icon className="h-5 w-5 text-emerald-600" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative w-full max-w-md mx-4">
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 bg-gray-100 dark:bg-gray-700 border-0"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="/profile.jpg" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="font-medium hidden md:inline">John Doe</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dashboard/student/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Change Password</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default SidebarDemo;
