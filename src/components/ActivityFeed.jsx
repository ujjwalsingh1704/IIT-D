import React from 'react';
import { Clock, User, FileText, Users, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'document',
    title: 'New policy document uploaded',
    description: 'Healthcare Benefits Policy 2024',
    time: '2 hours ago',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    type: 'user',
    title: 'New employee onboarded',
    description: 'Michael Chen joined IT Department',
    time: '4 hours ago',
    icon: User,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Department meeting completed',
    description: 'Q4 Planning Session - Finance Department',
    time: '1 day ago',
    icon: Users,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 4,
    type: 'task',
    title: 'Budget approval completed',
    description: 'Q1 2024 Budget has been approved',
    time: '2 days ago',
    icon: CheckCircle,
    color: 'bg-green-100 text-green-600',
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`flex-shrink-0 p-2 rounded-lg ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
              <div className="flex items-center mt-2 text-xs text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}