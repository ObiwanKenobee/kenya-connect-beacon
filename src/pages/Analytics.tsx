
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const Analytics = () => {
  return (
    <PageLayout title="Analytics & Reporting">
      <div className="flex items-center justify-center h-64 border border-dashed rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-medium">Analytics Coming Soon</h2>
          <p className="text-muted-foreground">
            Detailed metrics and reports will be available in future updates.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Analytics;
