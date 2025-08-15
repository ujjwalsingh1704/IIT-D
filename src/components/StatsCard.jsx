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
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg border border-slate-200/50 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">{value}</p>
          <div className="flex items-center">
            <span
              className={`text-sm font-bold px-2 py-1 rounded-full ${
                changeType === 'increase'
                  ? 'text-emerald-700 bg-emerald-100'
                  : changeType === 'decrease'
                  ? 'text-red-700 bg-red-100'
                  : 'text-slate-700 bg-slate-100'
              }`}
            >
              {change}
            </span>
            <span className="text-xs text-slate-500 ml-2 font-medium">from last month</span>
          </div>
        </div>
        <div className={`p-4 rounded-xl ${classes.lightBg} shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
          <Icon className={`w-7 h-7 ${classes.text} drop-shadow-sm`} />
        </div>
      </div>
    </div>
  );
}
