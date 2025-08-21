import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

import Departments from './pages/Department';
import Employees from './pages/Employees';
import Documents from './pages/Document';
import Analytics from './pages/Analytics';
import Calendar from './pages/Calendar';
import Settings from './pages/Setting';
import Help from './pages/Help';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password, userType, department) => {
    // Simple demo authentication
    if (username && password) {
      setIsAuthenticated(true);
      setUser({ 
        username, 
        name: username, 
        role: userType === 'citizen' ? 'Citizen' : 'Department Staff',
        userType,
        department: userType === 'department' ? department : null
      });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar user={user} />

        <div className="lg:pl-64">
          <Header user={user} onLogout={handleLogout} />

          <main>
            <Routes>
              {user?.userType === 'citizen' ? (
                // Citizen Routes - Will add citizen-specific pages here
                <>
                  <Route path="/" element={<CitizenDashboard />} />
                  <Route path="/services" element={<div className="p-6"><h1 className="text-2xl font-bold">Citizen Services</h1></div>} />
                  <Route path="/applications" element={<div className="p-6"><h1 className="text-2xl font-bold">My Applications</h1></div>} />
                  <Route path="/profile" element={<div className="p-6"><h1 className="text-2xl font-bold">My Profile</h1></div>} />
                  <Route path="/help" element={<Help />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </>
              ) : (
                // Department Routes
                <>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/departments" element={<Departments />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/documents" element={<Documents />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </>
              )}
              <Route path="/login" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;