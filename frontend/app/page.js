import Link from "next/link"
import { UserCog, GraduationCap, School } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center bg-gray-900">
      {/* Netflix-style header */}

      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Smart Campus</h1>
          <p className="mt-4 text-xl text-gray-300">Manage your school efficiently with our comprehensive platform</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-16">
          {/* Admin Profile */}
          <Link href="/admin/login" className="group flex flex-col items-center">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-md bg-red-700 transition-all duration-200 group-hover:ring-4 group-hover:ring-white sm:h-40 sm:w-40">
              <div className="flex h-full w-full items-center justify-center">
                <UserCog className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-200">
                <div className="h-12 w-12 rounded-full border-2 border-white opacity-0" />
              </div>
            </div>
            <span className="text-center text-lg text-gray-300 transition-colors duration-200 group-hover:text-white">
              Admin
            </span>
          </Link>

          {/* Teacher Profile */}
          <Link href="/teacher/dashboard" className="group flex flex-col items-center">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-md bg-green-700 transition-all duration-200 group-hover:ring-4 group-hover:ring-white sm:h-40 sm:w-40">
              <div className="flex h-full w-full items-center justify-center">
                <School className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-200">
                <div className="h-12 w-12 rounded-full border-2 border-white opacity-0 " />
              </div>
            </div>
            <span className="text-center text-lg text-gray-300 transition-colors duration-200 group-hover:text-white">
              Teacher
            </span>
          </Link>

          {/* Student Profile */}
          <Link href="/student/dashboard" className="group flex flex-col items-center">
            <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-md bg-blue-700 transition-all duration-200 group-hover:ring-4 group-hover:ring-white sm:h-40 sm:w-40">
              <div className="flex h-full w-full items-center justify-center">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-200">
                <div className="h-12 w-12 rounded-full border-2 border-white opacity-0 transition-opacity duration-200 " />
              </div>
            </div>
            <span className="text-center text-lg text-gray-300 transition-colors duration-200">
              Student
            </span>
          </Link>
        </div>

        <div className="mt-16">
          <button className="rounded-md border border-gray-600 px-4 py-2 text-gray-400 transition-colors hover:border-gray-400 hover:text-white">
            Manage Profiles
          </button>
        </div>
      </main>
    </div>
  )
}
