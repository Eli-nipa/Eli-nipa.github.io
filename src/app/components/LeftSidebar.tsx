import { LayoutDashboard, FileText, FolderOpen, Settings } from 'lucide-react';

export function LeftSidebar() {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, active: true },
    { id: 'cir', label: 'CIR', icon: FileText, active: false },
    { id: 'management', label: 'Management', icon: FolderOpen, active: false },
    { id: 'settings', label: 'Settings', icon: Settings, active: false },
  ];

  return (
    <div className="w-52 bg-gray-100 border-r border-gray-300 h-full overflow-y-auto">
      <div className="py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full px-4 py-2.5 flex items-center gap-3 text-sm ${
              item.active
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
