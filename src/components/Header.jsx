import React from 'react';
import { Bell, Search, Settings, User, Menu, Plus } from 'lucide-react';

export default function Header({ user, onLogout }) {
  return (
    <header className="relative px-6 py-4 overflow-hidden shadow-xl shadow-slate-500/20 drop-shadow-2xl">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-white/15 backdrop-blur-3xl border-b border-white/30 shadow-2xl shadow-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
      <div className="absolute inset-0 backdrop-saturate-150 backdrop-brightness-110"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="lg:hidden p-2 rounded-xl hover:bg-slate-100 hover:shadow-md transition-all duration-200 transform hover:scale-105">
              <Menu className="w-5 h-5 text-slate-600" />
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 ring-2 ring-blue-100">
                <span className="text-white font-bold text-sm drop-shadow-sm">GC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">GovConnect</h1>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-slate-500 font-medium">Live Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 transition-colors" />
              <input
                type="text"
                placeholder="Search departments, employees..."
                className="pl-10 pr-4 py-2.5 w-72 bg-white/30  border border-gray/30 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400/50 focus:bg-white/40 transition-all duration-200 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:bg-gray/40 placeholder-slate-500 hover:ring-gray/40"
              />
            </div>

            <button className="relative p-2.5 text-slate-500 hover:text-slate-700 hover:bg-white/30 hover:backdrop-blur-md rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-900/10 group">
              <Bell className="w-5 h-5 group-hover:animate-pulse" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center shadow-lg shadow-red-500/25 animate-pulse ring-2 ring-white/80 backdrop-blur-sm">
                3
              </span>
            </button>

            <button className="p-2.5 text-slate-500 hover:text-slate-700 hover:bg-white/30 hover:backdrop-blur-md rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-900/10 group">
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <button className="px-4 py-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 backdrop-blur-sm border border-purple-400/20 hover:border-purple-300/30 group">
              <div className="flex items-center space-x-2">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-sm">New Task</span>
              </div>
            </button>

            <div className="flex items-center space-x-3 pl-4 border-l border-white/30">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg shadow-slate-500/25 ring-2 ring-white/50 hover:ring-white/70 transition-all duration-200 backdrop-blur-sm">
                  <User className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white/80 shadow-sm backdrop-blur-sm"></div>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-800">{user?.name || 'Sarah Johnson'}</p>
                <p className="text-xs text-slate-500 font-medium">{user?.role || 'Department Head'}</p>
              </div>
              {onLogout && (
                <button
                  onClick={onLogout}
                  className="ml-3 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5 backdrop-blur-sm border border-blue-400/20 hover:border-blue-300/30"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}