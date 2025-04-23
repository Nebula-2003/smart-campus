"use client"

import Link from "next/link"
import { ChevronLeft, FileText, Calendar, CheckCircle, Clock, Link as LinkIcon, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import React, { useState } from "react"

export default function AssignmentsView() {
  const [submissionMethod, setSubmissionMethod] = useState('link')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Page header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/dashboard/student" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
            <h1 className="text-xl font-bold">Assignments</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your course assignments
          </p>
        </div>
      </div>

      {/* Assignments content */}
      <main className="px-4 py-6 max-w-6xl mx-auto">
        <Tabs defaultValue="pending" className="mb-6">
          <TabsList>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>

          {/* Pending Assignments Tab */}
          <TabsContent value="pending" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Data Structures Project</CardTitle>
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Due: Apr 25, 2025
                    </Badge>
                  </div>
                  <CardDescription>CS-301 - Prof. Smith</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Implement a binary search tree with all operations. Submit your code and documentation.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>5 days remaining</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Submit Assignment</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Submit Assignment</DialogTitle>
                        <DialogDescription>
                          Submit your work for "Data Structures Project"
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Button 
                            variant={submissionMethod === 'link' ? 'default' : 'outline'}
                            className="w-full justify-start"
                            onClick={() => setSubmissionMethod('link')}
                          >
                            <LinkIcon className="h-4 w-4 mr-2" />
                            Submit Link
                          </Button>
                          <div className="flex items-center gap-2">
                            <Separator className="flex-1" />
                            <span className="text-xs text-gray-500">OR</span>
                            <Separator className="flex-1" />
                          </div>
                          <Button 
                            variant={submissionMethod === 'file' ? 'default' : 'outline'}
                            className="w-full justify-start"
                            onClick={() => setSubmissionMethod('file')}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload File
                          </Button>
                        </div>

                        {submissionMethod === 'link' ? (
                          <div className="grid gap-2">
                            <Label htmlFor="submission">Submission URL</Label>
                            <Input id="submission" placeholder="https://example.com" />
                          </div>
                        ) : (
                          <div className="grid gap-2">
                            <Label htmlFor="fileUpload">Upload File</Label>
                            <Input id="fileUpload" type="file" />
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <Button type="submit">Submit</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Submitted Assignments Tab */}
          <TabsContent value="submitted" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Database Design</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Submitted: Apr 10, 2025
                    </Badge>
                  </div>
                  <CardDescription>CS-302 - Prof. Johnson</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    ER diagram and schema for library management system.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Grading in progress</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Submission</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Your Submission</DialogTitle>
                        <DialogDescription>
                          Database Design submitted on Apr 10, 2025
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label>Submission Type</Label>
                          <p className="text-sm">File Upload</p>
                        </div>
                        <div className="grid gap-2">
                          <Label>File</Label>
                          <p className="text-sm">library_er_diagram.pdf</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Graded Assignments Tab */}
          <TabsContent value="graded" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Algorithm Analysis</CardTitle>
                    <Badge className="bg-green-50 text-green-700 border-green-200">
                      Graded: 18/20
                    </Badge>
                  </div>
                  <CardDescription>CS-303 - Prof. Williams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Time complexity analysis of sorting algorithms.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Feedback available</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">View Feedback</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Feedback</DialogTitle>
                        <DialogDescription>
                          Algorithm Analysis - Score: 18/20
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label>Professor's Comments</Label>
                          <p className="text-sm">
                            Excellent analysis of merge sort and quick sort. 
                            Could improve on heap sort explanation. Good work overall!
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Resubmit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Resubmit Assignment</DialogTitle>
                        <DialogDescription>
                          Submit an updated version of "Algorithm Analysis"
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="resubmission">Upload Updated File</Label>
                          <Input id="resubmission" type="file" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="notes">Notes to Professor (Optional)</Label>
                          <Input id="notes" placeholder="Explain what you've updated" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Resubmit</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}