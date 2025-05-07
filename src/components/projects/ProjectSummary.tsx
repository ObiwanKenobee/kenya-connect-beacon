
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ProjectSummary() {
  // Mock data for project overview
  const projectStats = {
    totalProjects: 48,
    activeProjects: 26,
    completedProjects: 14,
    plannedProjects: 8,
    onTrack: 20,
    atRisk: 4,
    delayed: 2,
    overallProgress: 62,
  };

  // Quick access projects
  const quickAccessProjects = [
    { name: 'Marsabit Tower Network', progress: 75, status: 'in-progress' },
    { name: 'Turkana Expansion', progress: 30, status: 'in-progress' },
    { name: 'Kwale Coastal Network', progress: 100, status: 'completed' },
  ];

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>Summary of all telecommunication projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{projectStats.totalProjects}</span>
              <span className="text-sm text-muted-foreground">Total Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{projectStats.activeProjects}</span>
              <span className="text-sm text-muted-foreground">Active</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{projectStats.completedProjects}</span>
              <span className="text-sm text-muted-foreground">Completed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">{projectStats.plannedProjects}</span>
              <span className="text-sm text-muted-foreground">Planned</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm mb-1">
              <div>Overall Progress</div>
              <div className="font-medium">{projectStats.overallProgress}%</div>
            </div>
            <Progress value={projectStats.overallProgress} className="h-2" />
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
              {projectStats.onTrack} On Track
            </Badge>
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">
              {projectStats.atRisk} At Risk
            </Badge>
            <Badge variant="outline" className="bg-red-500/10 text-red-600 hover:bg-red-500/20">
              {projectStats.delayed} Delayed
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
          <CardDescription>Recently viewed projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {quickAccessProjects.map((project, i) => (
              <div key={i} className="border rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium truncate">{project.name}</div>
                  <Badge 
                    className={project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'}
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden mb-2">
                  <div 
                    className={project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'} 
                    style={{ width: `${project.progress}%`, height: '100%' }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress: {project.progress}%</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2">
                    Details <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
