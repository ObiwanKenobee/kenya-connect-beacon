
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { ProjectList } from '@/components/projects/ProjectList';
import { Button } from '@/components/ui/button';
import { Plus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Projects = () => {
  return (
    <PageLayout title="Project Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">
              Manage and monitor all telecommunications infrastructure projects
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-3">
            <Input placeholder="Search projects..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>
        
        <ProjectList />
        
      </div>
    </PageLayout>
  );
};

export default Projects;
