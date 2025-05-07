
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, BarChart2, Clipboard, Users, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarItem = {
  name: string;
  icon: React.ElementType;
  path: string;
};

const sidebarItems: SidebarItem[] = [
  { name: 'Coverage Map', icon: Map, path: '/' },
  { name: 'Projects', icon: Clipboard, path: '/projects' },
  { name: 'Analytics', icon: BarChart2, path: '/analytics' },
  { name: 'Community', icon: Users, path: '/community' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

type AppSidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export function AppSidebar({ isSidebarOpen, toggleSidebar }: AppSidebarProps) {
  const isMobile = useIsMobile();

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar transition-transform duration-300 flex flex-col",
          isMobile && !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">
            <span className="text-white">KRCEI</span>
            <span className="text-kenya-red"> ConnectHub</span>
          </h1>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="text-white hover:bg-sidebar-accent"
            >
              <X size={20} />
            </Button>
          )}
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground transition-colors",
                  isActive 
                    ? "bg-sidebar-primary text-white" 
                    : "hover:bg-sidebar-accent"
                )
              }
            >
              <item.icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-white/70 truncate">admin@krcei.go.ke</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Mobile toggle button */}
      {isMobile && !isSidebarOpen && (
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          className="fixed left-4 top-4 z-30 bg-background shadow-md"
        >
          <Menu size={20} />
        </Button>
      )}
    </>
  );
}
