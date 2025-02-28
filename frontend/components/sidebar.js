"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Package2, Settings } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

export function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <div className={`hidden border-r bg-muted/40 md:block ${isOpen ? "w-64" : "w-20"}`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            {isOpen && <span className="">Student Dashboard</span>}
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              {isOpen && "Dashboard"}
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              {isOpen && "Settings"}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}