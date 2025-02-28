import DashboardLayout from "@/components/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="text-muted-foreground">
          This is your dashboard. You can add more content here.
        </p>
      </div>
    </DashboardLayout>
  );
}