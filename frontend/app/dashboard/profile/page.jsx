import Link from "next/link"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  CreditCard,
  FileText,
  Home,
  Mail,
  Menu,
  Phone,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileView() {
  return (
    <div>

        {/* Page header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <Link href="/" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back to Dashboard</span>
              </Link>
              <h1 className="text-xl font-bold">Student Profile</h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">View and manage your complete profile information</p>
          </div>
        </div>

        {/* Profile content */}
        <main className="px-4 py-6 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <div className="p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" />
                <AvatarFallback className="text-3xl">JD</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-500 dark:text-gray-400">Student ID: STU20215687</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    Semester 5
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Engineering
                  </Badge>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    Silver Oak University
                  </Badge>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">johndoe@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">1234567890</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block ml-auto">
                <Button variant="outline">Edit Profile</Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-4">
              <TabsTrigger value="basic">Basic Details</TabsTrigger>
              <TabsTrigger value="parents">Parents Details</TabsTrigger>
              <TabsTrigger value="address">Address Details</TabsTrigger>
              <TabsTrigger value="bank">Bank Details</TabsTrigger>
            </TabsList>

            {/* Basic Details Tab */}
            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Details</CardTitle>
                  <CardDescription>Your personal and academic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                        <p className="font-medium">18-02-2004</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                        <p className="font-medium">Female</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Nationality</p>
                        <p className="font-medium">American</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium">johndoe@gmail.com</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">1234567890</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Alternate Phone</p>
                        <p className="font-medium">9876543210</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Blood Group</p>
                        <p className="font-medium">B+</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Religion</p>
                        <p className="font-medium">Christianity</p>
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Student ID</p>
                        <p className="font-medium">STU20215687</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">University</p>
                        <p className="font-medium">Silver Oak University</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
                        <p className="font-medium">Bachelor of Engineering</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Specialization</p>
                        <p className="font-medium">Computer Science</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current Semester</p>
                        <p className="font-medium">5</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enrollment Year</p>
                        <p className="font-medium">2021</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Expected Graduation</p>
                        <p className="font-medium">2025</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current CGPA</p>
                        <p className="font-medium">3.8</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Academic Status</p>
                        <p className="font-medium">Good Standing</p>
                      </div>
                    </div>
                  </div>

                  {/* Documents */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Documents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">ID Card</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Verified
                          </Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">High School Diploma</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Verified
                          </Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Birth Certificate</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Verified
                          </Badge>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Parents Details Tab */}
            <TabsContent value="parents">
              <Card>
                <CardHeader>
                  <CardTitle>Parents Details</CardTitle>
                  <CardDescription>Information about your parents or guardians</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Father's Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Father's Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                        <p className="font-medium">Robert Doe</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Occupation</p>
                        <p className="font-medium">Software Engineer</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Employer</p>
                        <p className="font-medium">Tech Solutions Inc.</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                        <p className="font-medium">Master's in Computer Science</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium">robert.doe@gmail.com</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">9876543210</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Annual Income</p>
                        <p className="font-medium">$95,000</p>
                      </div>
                    </div>
                  </div>

                  {/* Mother's Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Mother's Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                        <p className="font-medium">Sarah Doe</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Occupation</p>
                        <p className="font-medium">Financial Analyst</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Employer</p>
                        <p className="font-medium">Global Finance Partners</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                        <p className="font-medium">MBA Finance</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium">sarah.doe@gmail.com</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">8765432109</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Annual Income</p>
                        <p className="font-medium">$85,000</p>
                      </div>
                    </div>
                  </div>

                  {/* Guardian Information (if applicable) */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Guardian Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Relationship</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Occupation</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">N/A</p>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                        <p className="font-medium">Robert Doe</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Relationship</p>
                        <p className="font-medium">Father</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                        <p className="font-medium">9876543210</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Alternate Phone</p>
                        <p className="font-medium">9876543211</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Address Details Tab */}
            <TabsContent value="address">
              <Card>
                <CardHeader>
                  <CardTitle>Address Details</CardTitle>
                  <CardDescription>Your permanent and current address information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Permanent Address */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Permanent Address</h3>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Verified</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-3 space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Street Address</p>
                        <p className="font-medium">123 Maple Avenue, Apt 4B</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
                        <p className="font-medium">Springfield</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">State/Province</p>
                        <p className="font-medium">Illinois</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Postal Code</p>
                        <p className="font-medium">62704</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Country</p>
                        <p className="font-medium">United States</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Residence Type</p>
                        <p className="font-medium">Owned</p>
                      </div>
                    </div>
                  </div>

                  {/* Current Address */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Current Address</h3>
                      <Badge className="bg-amber-50 text-amber-700 border-amber-200">Same as Permanent</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-3 space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Street Address</p>
                        <p className="font-medium">123 Maple Avenue, Apt 4B</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
                        <p className="font-medium">Springfield</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">State/Province</p>
                        <p className="font-medium">Illinois</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Postal Code</p>
                        <p className="font-medium">62704</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Country</p>
                        <p className="font-medium">United States</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Residence Type</p>
                        <p className="font-medium">Owned</p>
                      </div>
                    </div>
                  </div>

                  {/* Address History */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Address History</h3>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-1 md:grid-cols-5 p-4 border-b">
                        <div className="md:col-span-2 font-medium mb-2 md:mb-0">567 Oak Street</div>
                        <div className="md:col-span-2 text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
                          Chicago, IL 60007
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">2018 - 2021</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-5 p-4">
                        <div className="md:col-span-2 font-medium mb-2 md:mb-0">289 Pine Drive</div>
                        <div className="md:col-span-2 text-gray-500 dark:text-gray-400 mb-2 md:mb-0">
                          Chicago, IL 60007
                        </div>
                        <div className="text-gray-500 dark:text-gray-400">2015 - 2018</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Bank Details Tab */}
            <TabsContent value="bank">
              <Card>
                <CardHeader>
                  <CardTitle>Bank Details</CardTitle>
                  <CardDescription>Your banking and financial information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Primary Bank Account */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium">Primary Bank Account</h3>
                      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Verified</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Holder Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Bank Name</p>
                        <p className="font-medium">CitiBank</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
                        <p className="font-medium">Savings</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Number</p>
                        <p className="font-medium">XXXX-XXXX-8765</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">IFSC Code</p>
                        <p className="font-medium">CITI0000123</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Branch</p>
                        <p className="font-medium">Springfield Main</p>
                      </div>
                    </div>
                  </div>

                  {/* Scholarship/Financial Aid */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Scholarship/Financial Aid</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Scholarship Name</p>
                        <p className="font-medium">Merit Scholarship Program</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
                        <p className="font-medium">$5,000 per semester</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="font-medium">8 semesters</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                        <p className="font-medium">Active</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Criteria</p>
                        <p className="font-medium">Maintain 3.5 GPA or higher</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment History */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Recent Payment History</h3>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 bg-gray-50 dark:bg-gray-800 border-b font-medium">
                        <div>Transaction ID</div>
                        <div>Date</div>
                        <div>Description</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 border-b">
                        <div className="font-medium">#TRX78965</div>
                        <div>02 Apr 2025</div>
                        <div>Tuition Fee - Spring 2025</div>
                        <div>$3,500.00</div>
                        <div>
                          <Badge className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 border-b">
                        <div className="font-medium">#TRX78845</div>
                        <div>15 Mar 2025</div>
                        <div>Library Fine</div>
                        <div>$25.00</div>
                        <div>
                          <Badge className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4">
                        <div className="font-medium">#TRX77695</div>
                        <div>05 Jan 2025</div>
                        <div>Lab Equipment Fee</div>
                        <div>$120.00</div>
                        <div>
                          <Badge className="bg-green-50 text-green-700 border-green-200">Paid</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tax Information */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Tax Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Tax ID / SSN</p>
                        <p className="font-medium">XXX-XX-7890</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Tax Form</p>
                        <p className="font-medium">W-9</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                        <p className="font-medium">Filed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
  )
}
