import Link from "next/link"
import { ChevronLeft, CreditCard, Banknote, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeeTransactionView() {
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
            <h1 className="text-xl font-bold">Fee Transactions</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            View and manage your fee payments
          </p>
        </div>
      </div>

      {/* Fees content */}
      <main className="px-4 py-6 max-w-6xl mx-auto">
        <Tabs defaultValue="outstanding" className="mb-6">
          <TabsList>
            <TabsTrigger value="outstanding">Outstanding</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="receipts">Receipts</TabsTrigger>
          </TabsList>

          {/* Outstanding Fees Tab */}
          <TabsContent value="outstanding" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Tuition Fee - Spring 2025</CardTitle>
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Due: May 15, 2025
                    </Badge>
                  </div>
                  <CardDescription>Semester 5</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-medium">$3,500.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Late Fee After</p>
                      <p className="font-medium">May 20, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>30 days remaining</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Pay Now</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Paid Fees Tab */}
          <TabsContent value="paid" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Library Fine</CardTitle>
                    <Badge className="bg-green-50 text-green-700 border-green-200">
                      Paid: Mar 15, 2025
                    </Badge>
                  </div>
                  <CardDescription>Late book return</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-medium">$25.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Transaction ID</p>
                      <p className="font-medium">#TRX78845</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Payment confirmed</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="outline">View Receipt</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Receipts Tab */}
          <TabsContent value="receipts" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Receipts</CardTitle>
                  <CardDescription>Download your payment receipts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Banknote className="h-5 w-5 text-emerald-600" />
                        <div>
                          <p className="font-medium">Tuition Fee - Fall 2024</p>
                          <p className="text-sm text-gray-500">Paid on Oct 10, 2024</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                    {/* Additional receipts would go here */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}