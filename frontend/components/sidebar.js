"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ClipboardList, DollarSign, BookOpen, Bell, Settings, Menu } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

export function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className={`bg-[#6C5CE7] transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <div className="p-4 flex items-center">
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          className="text-white hover:bg-[#5849c5] rounded-full"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="px-4 py-2">
        <div className="bg-[#8075e5] rounded-lg p-3 mb-6 flex justify-center">
          <BookOpen className="text-white h-6 w-6" />
        </div>

        <nav>
          {[
            { icon: Calendar, text: "Daily Updates" },
            { icon: ClipboardList, text: "Assignment Updates" },
            { icon: DollarSign, text: "Fee Transaction" },
            { icon: BookOpen, text: "Exam" },
            { icon: Bell, text: "Notifications" },
            { icon: Settings, text: "Settings" },
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start mb-2 text-white hover:bg-[#5849c5] rounded-full ${!isOpen ? "px-2" : "px-4"}`}
            >
              <item.icon className={`h-5 w-5 ${isOpen ? "mr-3" : ""}`} />
              {isOpen && (
                <span className="whitespace-nowrap">{item.text}</span>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}