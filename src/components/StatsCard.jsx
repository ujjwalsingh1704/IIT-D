import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

const colorClasses = {
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-600',
    lightBg: 'bg-blue-50',
  },
  green: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-600',
    lightBg: 'bg-emerald-50',
  },
  yellow: {
    bg: 'bg-amber-500',
    text: 'text-amber-600',
    lightBg: 'bg-amber-50',
  },
  red: {
    bg: 'bg-red-500',
    text: 'text-red-600',
    lightBg: 'bg-red-50',
  },
};

export default function StatsCard({ title, value, change, changeType, icon: Icon, color }) {
  const classes = colorClasses[color];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            <span
              className={`text-sm font-medium ${
                changeType === 'increase'
                  ? 'text-emerald-600'
                  : changeType === 'decrease'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500 ml-1">from last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${classes.lightBg}`}>
          <Icon className={`w-6 h-6 ${classes.text}`} />
        </div>
      </div>
    </div>
  );
}
