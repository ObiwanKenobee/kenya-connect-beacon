
import React, { useState } from 'react';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function PageLayout({ children, title }: PageLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <main 
        className={cn(
          "flex flex-col flex-1 transition-all duration-300",
          !isMobile && isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <AppHeader title={title} />
        <div className="flex-1 p-4 md:p-6 overflow-y-auto animate-enter">
          {children}
        </div>
      </main>
    </div>
  );
}
