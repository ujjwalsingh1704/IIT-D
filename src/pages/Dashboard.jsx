import React from 'react';
import StatsCard from '../components/StatsCard';
import ActivityFeed from '../components/ActivityFeed';
import ProgressChart from '../components/ProgressChart';
import QuickActions from '../components/QuickActions';
import { Users, Building, FileText, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Department Dashboard</h2>
        <p className="text-gray-600 mt-1">Welcome back, Sarah. Here's what's happening in your departments today.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Employees"
          value="1,247"
          change="+12%"
          changeType="increase"
          icon={Users}
          color="blue"
        />
        <StatsCard
          title="Active Departments"
          value="8"
          change="+1"
          changeType="increase"
          icon={Building}
          color="green"
        />
        <StatsCard
          title="Documents Processed"
          value="432"
          change="+8%"
          changeType="increase"
          icon={FileText}
          color="yellow"
        />
        <StatsCard
          title="Efficiency Rate"
          value="94.2%"
          change="+2.1%"
          changeType="increase"
          icon={TrendingUp}
          color="green"
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProgressChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
      
      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed />
        
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Budget Review Meeting</p>
                <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">New Employee Orientation</p>
                <p className="text-sm text-gray-500">Friday, 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Department Heads Meeting</p>
                <p className="text-sm text-gray-500">Next Monday, 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}