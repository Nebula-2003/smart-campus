import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, MessageSquare, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CreateAnnouncementForm from "../../_component/createAnnouncement";

export default function AnnouncementsPage() {
    return (
        <div className="space-y-6 px-6 py-8 md:py-12 max-w-7xl mx-auto">
           <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-muted-foreground">Manage and create announcements for your classes</p>
        </div>
        <CreateAnnouncementForm/>
      </div>

            <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="all">All Announcements</TabsTrigger>
                    <TabsTrigger value="phy301">PHY301</TabsTrigger>
                    <TabsTrigger value="phy201">PHY201</TabsTrigger>
                    <TabsTrigger value="phy205">PHY205</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6 space-y-6">
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
                                        Reminder: The midterm exam will cover all material from chapters 1-5. Office hours are extended this week for additional
                                        help. Please make sure to review the practice problems from last week's lab session.
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>42 students viewed</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>5 comments</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Delete
                                    </Button>
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
                                        Lab session on Friday will be held in Room 302 instead of the usual lab due to maintenance. Please bring your laptops
                                        for data analysis. We will be working with the electromagnetic field simulation software we discussed in class.
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>36 students viewed</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>2 comments</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Delete
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border p-4">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">You posted to PHY201</p>
                                        <p className="text-xs text-muted-foreground">1 week ago</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm">
                                        The deadline for the mechanics project has been extended to next Friday. Please use this extra time to refine your
                                        calculations and improve your presentation slides. I'll be available for additional office hours on Wednesday from 2-4
                                        PM.
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>40 students viewed</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>8 comments</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="phy301" className="space-y-4">
                    <Card>
                        <CardContent className="pt-6 space-y-6">
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
                                        Reminder: The midterm exam will cover all material from chapters 1-5. Office hours are extended this week for additional
                                        help. Please make sure to review the practice problems from last week's lab session.
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>42 students viewed</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MessageSquare className="h-4 w-4" />
                                        <span>5 comments</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                {/* Other tabs would have similar content for their respective courses */}
            </Tabs>
        </div>
    );
}
