
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';

const Community = () => {
  return (
    <PageLayout title="Community Engagement">
      <div className="flex items-center justify-center h-64 border border-dashed rounded-lg">
        <div className="text-center">
          <h2 className="text-xl font-medium">Community Portal Coming Soon</h2>
          <p className="text-muted-foreground">
            Local feedback, training resources, and SMS integration will be available here.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Community;
