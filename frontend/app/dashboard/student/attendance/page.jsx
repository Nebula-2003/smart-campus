"use client"

import { Calendar as CalendarIcon, BookOpen, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React, { useState } from "react"

export default function AttendanceView() {
  const [attendanceView, setAttendanceView] = useState('daily')
  const [date, setDate] = useState(new Date())

  // Sample attendance data
  const attendanceData = {
    daily: [
      { lecture: "Data Structures", time: "9:00 AM - 10:30 AM", status: "Present" },
      { lecture: "Algorithms", time: "11:00 AM - 12:30 PM", status: "Absent" },
      { lecture: "Database Systems", time: "2:00 PM - 3:30 PM", status: "Present" }
    ],
    monthly: [
      { date: "Apr 1", present: 3, total: 4 },
      { date: "Apr 2", present: 2, total: 3 },
      // ... more data
    ],
    overall: {
      present: 45,
      absent: 5,
      percentage: 90
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-bold">Attendance</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View and track your attendance records
          </p>
        </div>
      </div>

      {/* Attendance content */}
      <main className="px-4 py-6 max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Attendance Overview</CardTitle>
              <Select value={attendanceView} onValueChange={setAttendanceView}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily View</SelectItem>
                  <SelectItem value="monthly">Monthly View</SelectItem>
                  <SelectItem value="overall">Overall Stats</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6">
              <div className="flex-1">
                {attendanceView === 'daily' && (
                  <div className="space-y-4">
                    <h3 className="font-medium flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      {date.toLocaleDateString()}
                    </h3>
                    <div className="space-y-3">
                      {attendanceData.daily.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">{item.lecture}</p>
                            <p className="text-sm text-gray-500">{item.time}</p>
                          </div>
                          <Badge 
                            variant={item.status === 'Present' ? 'default' : 'destructive'}
                            className="flex items-center gap-1"
                          >
                            {item.status === 'Present' ? (
                              <Check className="h-3 w-3" />
                            ) : (
                              <X className="h-3 w-3" />
                            )}
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {attendanceView === 'monthly' && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Monthly Attendance</h3>
                    <div className="space-y-3">
                      {attendanceData.monthly.map((item, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{item.date}</p>
                            <p className="text-sm">
                              {item.present}/{item.total} lectures
                            </p>
                          </div>
                          <div className="mt-2 h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-green-500 rounded-full" 
                              style={{ width: `${(item.present/item.total)*100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {attendanceView === 'overall' && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Overall Attendance</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                        <p className="text-2xl font-bold">{attendanceData.overall.present}</p>
                        <p className="text-sm text-green-600 dark:text-green-400">Present</p>
                      </div>
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
                        <p className="text-2xl font-bold">{attendanceData.overall.absent}</p>
                        <p className="text-sm text-red-600 dark:text-red-400">Absent</p>
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                        <p className="text-2xl font-bold">{attendanceData.overall.percentage}%</p>
                        <p className="text-sm text-blue-600 dark:text-blue-400">Attendance</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-[300px]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}