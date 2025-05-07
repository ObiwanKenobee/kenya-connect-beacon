
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { MapPlaceholder } from '@/components/map/MapPlaceholder';
import { CoverageStats } from '@/components/map/CoverageStats';
import { ProjectSummary } from '@/components/projects/ProjectSummary';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <PageLayout title="Coverage Dashboard">
      <div className="space-y-6">
        <CoverageStats />
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <Card className="col-span-1 lg:col-span-2 overflow-hidden">
            <CardHeader>
              <CardTitle>Coverage Map</CardTitle>
              <CardDescription>
                Interactive map showing current coverage and tower locations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[500px]">
              <MapPlaceholder />
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Regional Status</CardTitle>
                <CardDescription>Coverage by county</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Nairobi', coverage: 98 },
                    { name: 'Mombasa', coverage: 89 },
                    { name: 'Nakuru', coverage: 78 },
                    { name: 'Turkana', coverage: 42 },
                    { name: 'Marsabit', coverage: 38 },
                  ].map((county, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span>{county.name}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              county.coverage > 80 ? 'bg-green-500' :
                              county.coverage > 50 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}
                            style={{ width: `${county.coverage}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium w-8">
                          {county.coverage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { location: 'Kitui Tower #23', type: 'Power Outage', time: '2h ago' },
                    { location: 'Lodwar Station', type: 'Connectivity Loss', time: '5h ago' },
                    { location: 'Malindi Base', type: 'Hardware Failure', time: '23h ago' },
                  ].map((incident, i) => (
                    <div key={i} className="flex items-start justify-between text-sm">
                      <div>
                        <p className="font-medium">{incident.location}</p>
                        <p className="text-muted-foreground">{incident.type}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {incident.time}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <ProjectSummary />
      </div>
    </PageLayout>
  );
};

export default Index;
