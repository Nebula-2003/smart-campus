"use client";

import { SidebarProvider, useSidebar } from "@/context/sidebar-context";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">
          <ToggleButton />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

function ToggleButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="outline" size="icon" onClick={toggleSidebar} className="md:hidden">
      <Menu className="h-4 w-4" />
    </Button>
  );
}