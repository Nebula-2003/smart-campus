import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, BookOpen, Calendar, CreditCard, FileText, Home, Menu, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
function page() {
    return (
        <div>
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

            {/* Dashboard content */}
            <main className="px-4 py-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Profile card */}
                    <Card className="md:col-span-2">
                        <CardHeader className="pb-2">
                            <CardTitle>Student Profile</CardTitle>
                            <CardDescription>Your academic information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-6">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                                    <AvatarImage src="/profile.jpg" alt="John Doe" />
                                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                                </Avatar>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                                        <p className="font-medium">John Doe</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">University</p>
                                        <p className="font-medium">Silver Oak University</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Program</p>
                                        <p className="font-medium">Bachelor of Engineering</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                                        <p className="font-medium">18-02-2004</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-medium">johndoe@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                        <p className="font-medium">1234567890</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                    Current Semester: 5
                                </Badge>
                                <a
                                    href="/dashboard/profile"
                                    className="cursor-pointer flex items-center text-sm font-medium text-black hover:text-blue-600 transition-all"
                                >
                                    View More
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Fees card */}
                    <Card>
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle>Fees Due</CardTitle>
                                <Link href="/dashboard/daily-updates" className="text-sm text-emerald-600 hover:underline">
                                    See all
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 text-center">
                                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-1">Total Outstanding Amount</p>
                                <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">$5,400</p>
                                <Button className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700">Pay Now</Button>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                                    <p className="text-xs text-blue-700 dark:text-blue-300">Tuition Fees</p>
                                    <p className="text-lg font-bold text-blue-700 dark:text-blue-300">$3,900</p>
                                </div>
                                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                                    <p className="text-xs text-amber-700 dark:text-amber-300">Other Charges</p>
                                    <p className="text-lg font-bold text-amber-700 dark:text-amber-300">$1,500</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Daily news preview */}
                    <Card className="md:col-span-3">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                                <CardTitle>Daily News</CardTitle>
                                <Link href="/dashboard/daily-updates" className="text-sm text-emerald-600 hover:underline">
                                    See all
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Card>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-base">Campus Technology Update</CardTitle>
                                        <CardDescription>April 11, 2025</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            New computer labs are now open in the Engineering building with the latest hardware.
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Link href="/daily-updates" className="text-sm text-emerald-600 hover:underline">
                                            Read more
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-base">Upcoming Career Fair</CardTitle>
                                        <CardDescription>April 10, 2025</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Don't miss the Spring Career Fair next week with over 50 companies attending.
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Link href="/daily-updates" className="text-sm text-emerald-600 hover:underline">
                                            Read more
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-base">Library Hours Extended</CardTitle>
                                        <CardDescription>April 9, 2025</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            The main library will now be open until midnight during finals week.
                                        </p>
                                    </CardContent>
                                    <CardFooter className="p-4 pt-0">
                                        <Link href="/daily-updates" className="text-sm text-emerald-600 hover:underline">
                                            Read more
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}


