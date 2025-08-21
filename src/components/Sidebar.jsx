import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, FileText, BarChart3, Calendar, Settings, HelpCircle, Building, FolderOpen, Map, Vote, FileBarChart } from 'lucide-react';

// Department Navigation
const departmentNavigation = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Departments', icon: Building, path: '/departments' },
  { name: 'Employees', icon: Users, path: '/employees' },
  { name: 'Documents', icon: FileText, path: '/documents' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
  { name: 'Calendar', icon: Calendar, path: '/calendar' },
];

// Citizen Navigation
const citizenNavigation = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Projects', icon: FolderOpen, path: '/projects' },
  { name: 'Map', icon: Map, path: '/map' },
  { name: 'Polls', icon: Vote, path: '/polls' },
  { name: 'Reports', icon: FileBarChart, path: '/reports' },
];

const secondaryNavigation = [
  { name: 'Settings', icon: Settings, path: '/settings' },
  { name: 'Help', icon: HelpCircle, path: '/help' },
];

const citizenSecondaryNavigation = [
  { name: 'Help', icon: HelpCircle, path: '/help' },
];

export default function Sidebar({ user }) {
  const location = useLocation();
  
  const navigation = user?.userType === 'citizen' ? citizenNavigation : departmentNavigation;
  const secondaryNav = user?.userType === 'citizen' ? citizenSecondaryNavigation : secondaryNavigation;

  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-gradient-to-b lg:from-slate-900 lg:via-slate-800 lg:to-slate-900 lg:shadow-2xl lg:shadow-slate-900/50">
      <div className="flex-1 flex flex-col min-h-0 pt-8 pb-6">
        {/* Logo/Brand Section */}
        <div className="px-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">GovConnect</h1>
              <p className="text-xs text-slate-400">{user?.userType === 'citizen' ? 'Citizen Portal' : 'Admin Portal'}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-105 ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 border-l-4 border-blue-300'
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md hover:shadow-slate-700/20'
              }`}
            >
              <item.icon
                className={`mr-4 flex-shrink-0 h-5 w-5 transition-all duration-200 ${
                  location.pathname === item.path 
                    ? 'text-blue-100 drop-shadow-sm' 
                    : 'text-slate-400 group-hover:text-blue-400 group-hover:scale-110'
                }`}
              />
              <span className="font-medium tracking-wide">{item.name}</span>
              {location.pathname === item.path && (
                <div className="ml-auto w-2 h-2 bg-blue-200 rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}
        </nav>
        
        <div className="px-4 space-y-2">
          <div className="border-t border-slate-700/50 pt-6">
            {secondaryNav.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white shadow-lg shadow-slate-700/25'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:shadow-md hover:shadow-slate-700/20'
                }`}
              >
                <item.icon className={`mr-4 flex-shrink-0 h-5 w-5 transition-all duration-200 ${
                  location.pathname === item.path 
                    ? 'text-slate-200 drop-shadow-sm' 
                    : 'text-slate-500 group-hover:text-slate-300 group-hover:scale-110'
                }`} />
                <span className="font-medium tracking-wide">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="px-6 pt-4">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400 font-medium">{user?.userType === 'citizen' ? 'Citizen Portal' : 'System Online'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}