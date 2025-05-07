
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const Settings = () => {
  return (
    <PageLayout title="Settings">
      <div className="flex items-center justify-center h-64 border border-dashed rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-medium">Settings Coming Soon</h2>
          <p className="text-muted-foreground">
            User roles, permissions, and system configurations will be available here.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Settings;
