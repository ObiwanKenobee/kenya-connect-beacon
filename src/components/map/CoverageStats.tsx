
import React from 'react';
import { Signal, Wifi, BatteryLow, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ElementType;
  description: string;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
};

const StatCard = ({ title, value, icon: Icon, description, trend, trendDirection }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
      {trend && (
        <div className="flex items-center mt-1">
          <span 
            className={`text-xs ${
              trendDirection === 'up' ? 'text-green-500' : 
              trendDirection === 'down' ? 'text-red-500' : 
              'text-gray-500'
            }`}
          >
            {trend}
          </span>
        </div>
      )}
    </CardContent>
  </Card>
);

export function CoverageStats() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Network Coverage"
        value="67%"
        icon={Signal}
        description="Population with 4G access"
        trend="+5.2% from last quarter"
        trendDirection="up"
      />
      <StatCard
        title="Active Towers"
        value="134"
        icon={Wifi}
        description="Operational nationwide"
        trend="+12 new towers"
        trendDirection="up"
      />
      <StatCard
        title="Power Reliability"
        value="92%"
        icon={BatteryLow}
        description="Uptime across network"
        trend="-0.5% from last month"
        trendDirection="down"
      />
      <StatCard
        title="Connectivity Issues"
        value="8"
        icon={AlertTriangle}
        description="Active incidents"
        trend="3 resolved this week"
        trendDirection="neutral"
      />
    </div>
  );
}
