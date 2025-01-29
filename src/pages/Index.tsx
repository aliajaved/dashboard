import { Users, MessageSquare, Share2, TrendingUp } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { EngagementChart } from "@/components/EngagementChart";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <SidebarTrigger />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total Followers"
              value="24.5K"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 12, isPositive: true }}
            />
            <MetricCard
              title="Engagement Rate"
              value="5.2%"
              icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 8, isPositive: true }}
            />
            <MetricCard
              title="Total Posts"
              value="342"
              icon={<Share2 className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 4, isPositive: true }}
            />
            <MetricCard
              title="Growth Rate"
              value="18%"
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
              trend={{ value: 2, isPositive: false }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <EngagementChart />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;