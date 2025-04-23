import Link from "next/link"
import Image from "next/image"
import { Bell, BookOpen, Calendar, ChevronLeft, CreditCard, FileText, Home, Menu, Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DailyUpdates() {
  return (
    <div className=" min-h-screen bg-gray-50 dark:bg-gray-900">

        {/* Page header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <Link href="/dashboard/student" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
              <h1 className="text-xl font-bold">Daily Updates</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Stay informed with the latest campus news and announcements
            </p>
          </div>
        </div>

        {/* Daily updates content */}
        <main className="px-4 py-6 max-w-7xl mx-auto">
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Updates</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-6">
                {/* Featured update */}
                <Card className="overflow-hidden">
                  <div className="md:grid md:grid-cols-2">
                    <div className="p-6">
                      <Badge className="mb-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Featured</Badge>
                      <h2 className="text-2xl font-bold mb-2">Campus Technology Update</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">April 11, 2025</p>
                      <p className="mb-4">
                        The university is pleased to announce the opening of new computer labs in the Engineering
                        building. These labs are equipped with the latest hardware and software to support your academic
                        needs.
                      </p>
                      <p className="mb-6">
                        All engineering students will have priority access during the first week. Please bring your
                        student ID to register for lab access. Training sessions will be held daily from 2-4 PM.
                      </p>
                      <Button>Read full announcement</Button>
                    </div>
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/computer-lab.jpeg"
                        fill
                        alt="Campus Technology Update"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>

                {/* Regular updates */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Academic
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 10, 2025</p>
                      </div>
                      <CardTitle>Upcoming Career Fair</CardTitle>
                      <CardDescription>Career Development Center</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Don't miss the Spring Career Fair next week with over 50 companies attending. Prepare your
                        resume and dress professionally. Pre-registration is required through the student portal.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          Campus
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 9, 2025</p>
                      </div>
                      <CardTitle>Library Hours Extended</CardTitle>
                      <CardDescription>University Library</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The main library will now be open until midnight during finals week. Additional study rooms have
                        been made available for group study sessions. Reserve your spot online.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          Events
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 8, 2025</p>
                      </div>
                      <CardTitle>Spring Festival Announcement</CardTitle>
                      <CardDescription>Student Activities Board</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The annual Spring Festival will be held on April 20th. Join us for food, music, and activities.
                        Student organizations can register for booths until April 15th.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                          Important
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 7, 2025</p>
                      </div>
                      <CardTitle>Course Registration Deadline</CardTitle>
                      <CardDescription>Registrar's Office</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The deadline for Fall semester course registration is April 30th. Please meet with your academic
                        advisor before registering. Late registration will incur additional fees.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Scholarship
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 6, 2025</p>
                      </div>
                      <CardTitle>New Scholarship Opportunities</CardTitle>
                      <CardDescription>Financial Aid Office</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Several new scholarship opportunities are now available for the upcoming academic year.
                        Applications are due by May 15th. Visit the financial aid office for more information.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          Academic
                        </Badge>
                        <p className="text-sm text-gray-500 dark:text-gray-400">April 5, 2025</p>
                      </div>
                      <CardTitle>Research Symposium</CardTitle>
                      <CardDescription>Graduate Studies Department</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        The annual Research Symposium will be held on May 5th. Undergraduate and graduate students are
                        invited to present their research. Abstract submissions are due by April 20th.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button size="sm">Read more</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="academic" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Academic
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-gray-400">April 10, 2025</p>
                    </div>
                    <CardTitle>Upcoming Career Fair</CardTitle>
                    <CardDescription>Career Development Center</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Don't miss the Spring Career Fair next week with over 50 companies attending. Prepare your resume
                      and dress professionally. Pre-registration is required through the student portal.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                    <Button size="sm">Read more</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        Academic
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-gray-400">April 5, 2025</p>
                    </div>
                    <CardTitle>Research Symposium</CardTitle>
                    <CardDescription>Graduate Studies Department</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The annual Research Symposium will be held on May 5th. Undergraduate and graduate students are
                      invited to present their research. Abstract submissions are due by April 20th.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                    <Button size="sm">Read more</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                        Events
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-gray-400">April 8, 2025</p>
                    </div>
                    <CardTitle>Spring Festival Announcement</CardTitle>
                    <CardDescription>Student Activities Board</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The annual Spring Festival will be held on April 20th. Join us for food, music, and activities.
                      Student organizations can register for booths until April 15th.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                    <Button size="sm">Read more</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="campus" className="mt-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        Campus
                      </Badge>
                      <p className="text-sm text-gray-500 dark:text-gray-400">April 9, 2025</p>
                    </div>
                    <CardTitle>Library Hours Extended</CardTitle>
                    <CardDescription>University Library</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      The main library will now be open until midnight during finals week. Additional study rooms have
                      been made available for group study sessions. Reserve your spot online.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Save
                    </Button>
                    <Button size="sm">Read more</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </main>
      </div>
  )
}
