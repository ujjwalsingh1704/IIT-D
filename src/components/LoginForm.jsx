import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, Shield, Building2, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// import { auth } from '../firebase'; // Remove Firebase auth import
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"; // Remove Firebase auth functions

export default function LoginForm({ onLogin }) {
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('citizen');
  const [department, setDepartment] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  // Removed OTP related states and functions
  // const [otp, setOtp] = useState('');
  // const [confirmationResult, setConfirmationResult] = useState(null);
  // const [showOtpInput, setShowOtpInput] = useState(false);
  // const [isSendingOtp, setIsSendingOtp] = useState(false);

  // Removed setupRecaptcha, handleSendOtp, handleVerifyOtp functions

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate authentication delay
    setTimeout(() => {
      if (loginIdentifier && password && (userType === 'citizen' || (userType === 'department' && department))) {
        onLogin(loginIdentifier, password, userType, department);
      } else {
        if (userType === 'department' && !department) {
          setError(t('selectDepartmentError'));
        } else if (!loginIdentifier || !password) {
          setError(t('loginCredentialsError'));
        } else {
          setError(t('invalidCredentials')); // New translation key needed
        }
      }
      setIsLoading(false);
    }, 1000);
  };

  const departments = [
    { value: '', label: t('selectDepartment') },
    { value: 'admin', label: t('administration') },
    { value: 'finance', label: t('finance') },
    { value: 'hr', label: t('humanResources') },
    { value: 'it', label: t('informationTechnology') },
    { value: 'health', label: t('healthDepartment') },
    { value: 'education', label: t('educationDepartment') },
    { value: 'transport', label: t('transportDepartment') }
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl mb-6 shadow-2xl shadow-primary/25 ring-4 ring-primary/20 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-4xl font-bold text-text mb-3">GovConnect</h1>
          <p className="text-lightText font-medium text-lg">{t('departmentManagementSystem')}</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
          {/* Glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-text mb-2">{t('welcomeBack')}</h2>
              <p className="text-lightText">{t('signInToAccount')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 backdrop-blur-sm">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-text mb-3">
                  {t('loginAs')}
                </label>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setUserType('citizen');
                      setDepartment('');
                      setError('');
                      setLoginIdentifier('');
                      setPassword('');
                    }}
                    className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
                      userType === 'citizen'
                        ? 'bg-primary/30 border-primary text-text shadow-lg shadow-primary/25'
                        : 'bg-background border-lightText/30 text-lightText hover:bg-background/80'
                    }`}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    {t('citizen')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUserType('department');
                      setError('');
                      setLoginIdentifier('');
                      setPassword('');
                      setDepartment('');
                    }}
                    className={`flex items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
                      userType === 'department'
                        ? 'bg-primary/30 border-primary text-text shadow-lg shadow-primary/25'
                        : 'bg-background border-lightText/30 text-lightText hover:bg-background/80'
                    }`}
                  >
                    <Building2 className="w-5 h-5 mr-2" />
                    {t('department')}
                  </button>
                </div>
              </div>

              {/* Login Identifier Field (ID/Email for Citizen, Username/Email for Department) */}
              <div>
                <label htmlFor="loginIdentifier" className="block text-sm font-medium text-text mb-2">
                  {userType === 'citizen' ? t('citizenIdEmail') : t('username')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-lightText" />
                  </div>
                  <input
                    id="loginIdentifier"
                    type="text"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 bg-background/50 backdrop-blur-sm border border-lightText/30 rounded-xl text-text placeholder-lightText/80 focus:ring-2 focus:ring-primary focus:border-primary focus:bg-background/70 transition-all duration-300"
                    placeholder={userType === 'citizen' ? t('enterCitizenIdEmail') : t('enterYourUsername')}
                    required
                  />
                </div>
              </div>

              {userType === 'department' && (
                // Department Selection - Only for Department Users
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-text mb-2">
                    {t('department')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-lightText" />
                    </div>
                    <select
                      id="department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-background/50 backdrop-blur-sm border border-lightText/30 rounded-xl text-text focus:ring-2 focus:ring-primary focus:border-primary focus:bg-background/70 transition-all duration-300 appearance-none"
                      required
                    >
                      {departments.map((dept) => (
                        <option key={dept.value} value={dept.value} className="bg-gray-800 text-white">
                          {dept.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-lightText" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Password Field (for both Citizen and Department) */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                  {t('password')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-lightText" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 bg-background/50 backdrop-blur-sm border border-lightText/30 rounded-xl text-text placeholder-lightText/80 focus:ring-2 focus:ring-primary focus:border-primary focus:bg-background/70 transition-all duration-300"
                    placeholder={t('enterYourPassword')}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-lightText hover:text-text transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-lightText hover:text-text transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary bg-background/50 border-lightText/30 rounded backdrop-blur-sm"
                  />
                  <span className="ml-2 text-sm text-lightText">{t('rememberMe')}</span>
                </label>
                <a href="#" className="text-sm text-primary hover:text-text font-medium transition-colors">
                  {t('forgotPassword')}
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 rounded-xl font-semibold hover:from-primary/90 hover:to-secondary/90 focus:ring-4 focus:ring-primary/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-text border-t-transparent rounded-full animate-spin mr-2"></div>
                    {t('signingIn')}
                  </div>
                ) : (
                  t('signIn')
                )}
              </button>
            </form>
            {/* Removed reCAPTCHA container */}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-lightText">
            {t('copyright')}
          </p>
        </div>
      </div>
    </div>
  );
}
