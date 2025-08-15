import React from 'react';
import { Plus, Upload, Download, Send, Calendar, Users } from 'lucide-react';

const actions = [
  { name: 'Add Employee', icon: Plus, color: 'bg-blue-500 hover:bg-blue-600' },
  { name: 'Upload Document', icon: Upload, color: 'bg-emerald-500 hover:bg-emerald-600' },
  { name: 'Generate Report', icon: Download, color: 'bg-amber-500 hover:bg-amber-600' },
  { name: 'Send Notice', icon: Send, color: 'bg-purple-500 hover:bg-purple-600' },
  { name: 'Schedule Meeting', icon: Calendar, color: 'bg-indigo-500 hover:bg-indigo-600' },
  { name: 'Manage Teams', icon: Users, color: 'bg-teal-500 hover:bg-teal-600' },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.name}
            className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-all transform hover:scale-105 ${action.color}`}
          >
            <action.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}