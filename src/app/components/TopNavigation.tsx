import { Bell, Mail, Grid3x3 } from 'lucide-react';

export function TopNavigation() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-900 text-white h-14 px-4 flex items-center justify-between z-50">
      {/* Left Side: Logo + System Name */}
      <div className="flex items-center gap-3">
        {/* Logo Icon - Layered square design */}
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-blue-700"></div>
          <div className="absolute inset-1 bg-blue-500"></div>
          <div className="absolute inset-2 bg-blue-300"></div>
        </div>

        {/* System Name */}
        <span className="text-base font-medium">eIDSR System - Staging - EOC</span>
      </div>

      {/* Right Side: Icon Buttons */}
      <div className="flex items-center gap-1">
        {/* Notifications */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Bell className="w-4 h-4" />
        </button>

        {/* Messages */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Mail className="w-4 h-4" />
        </button>

        {/* App Grid */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Grid3x3 className="w-4 h-4" />
        </button>

        {/* User Profile Circle */}
        <button className="w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-colors">
          <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-xs font-semibold">
            JD
          </div>
        </button>
      </div>
    </div>
  );
}
