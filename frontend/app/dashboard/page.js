import DashboardLayout from "@/components/dashboard-layout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { University, GraduationCap, User, Calendar, Mail, Phone } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-6">
        {/* Profile Card */}
        <Card className="col-span-7 p-6">
          <div className="flex gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <University className="h-5 w-5 text-gray-600" />
                  <span>Silver Oak University</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-gray-600" />
                  <span>Bachelor of Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-600" />
                  <span>Female</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <span>18-02-2004</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span>johndoe@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span>1234567890</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-gray-600">Current Semester: 5</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Right Panel */}
        <div className="col-span-5 space-y-6">
          {/* Fees Due */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Fees Dues</h3>
              <Button variant="link" className="text-[#6C5CE7]">
                See all
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-[#6C5CE7] text-white p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-sm mb-2">Total Outstanding Amount</div>
                  <div className="text-2xl font-bold">$5400</div>
                  <Button className="mt-2 bg-white text-[#6C5CE7] hover:bg-gray-100">
                    Pay Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <div className="text-sm text-blue-800">Tuition Fees</div>
                  <div className="text-xl font-bold text-blue-800">$3900</div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                  <div className="text-sm text-red-800">Other Charges</div>
                  <div className="text-xl font-bold text-red-800">$1500</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Daily News */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Daily News</h3>
              <Button variant="link" className="text-[#6C5CE7]">
                See all
              </Button>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Campus Technology Update</h4>
                <p className="text-sm text-gray-600">
                  New smart classroom facilities being installed across all
                  departments starting next week.
                </p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium mb-2">Academic Calendar Update</h4>
                <p className="text-sm text-gray-600">
                  Mid-semester examinations scheduled for March 15-25. Please
                  check your course portal for details.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}