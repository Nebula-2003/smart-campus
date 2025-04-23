import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Users,
  BookOpen,
  AlertTriangle,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function TeacherDashboard() {
  return (
    <div className="space-y-6 px-6 py-8 md:py-12 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                      <div className="px-6 py-8 md:py-12 max-w-7xl mx-auto">
                          <div className="grid md:grid-cols-2 gap-6 items-center">
                              <div>
                                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Hi John, Good Afternoon!</h1>
                                  <p className="text-emerald-100">Stay updated with your academic journey</p>
                                  <Button className="mt-4 bg-white text-emerald-600 hover:bg-emerald-50">View Schedule</Button>
                              </div>
                              {/* <div className="hidden md:flex justify-end">
                                  <Image
                                      src="/placeholder.svg?height=200&width=300"
                                      width={300}
                                      height={200}
                                      alt="Education illustration"
                                      className="object-contain"
                                  />
                              </div> */}
                          </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
                  </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
            <Calendar className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next class: Advanced Physics at 11:30 AM</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">Across 4 different courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <BarChart className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92.5%</div>
            <p className="text-xs text-muted-foreground">+2.5% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>You have 3 classes scheduled for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Advanced Physics</p>
                  <p className="text-sm text-muted-foreground">Room 302, Science Building</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 11:30 AM - 1:00 PM
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Introduction to Quantum Mechanics</p>
                  <p className="text-sm text-muted-foreground">Room 405, Science Building</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 2:00 PM - 3:30 PM
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Physics Lab Session</p>
                  <p className="text-sm text-muted-foreground">Lab 201, Science Building</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 4:00 PM - 6:00 PM
                  </Badge>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments" className="space-y-4">
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>Your latest class announcements</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/teacher/announcements">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">You posted to PHY301</p>
                  <p className="text-xs text-muted-foreground">Yesterday at 4:30 PM</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Reminder: The midterm exam will cover all material from chapters 1-5. Office hours are extended this
                  week for additional help.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>42 students viewed</span>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">You posted to PHY205</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Lab session on Friday will be held in Room 302 instead of the usual lab due to maintenance.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>36 students viewed</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Important alerts and messages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-0.5">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Room Change for Tomorrow</p>
                  <p className="text-xs text-muted-foreground">
                    Your PHY301 class tomorrow has been moved to Room 405 due to maintenance.
                  </p>
                  <p className="text-xs text-muted-foreground">10 minutes ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-0.5">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">New Message from Department Head</p>
                  <p className="text-xs text-muted-foreground">
                    "Please submit your course materials for next semester by Friday."
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-0.5">
                  <FileText className="h-5 w-5 text-emerald-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Grade Submission Reminder</p>
                  <p className="text-xs text-muted-foreground">Final grades for PHY205 are due by end of week.</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View All Notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
