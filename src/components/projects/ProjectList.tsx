
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

// Mock data for projects
const projects = [
  { 
    id: 'KEN-001',
    name: 'Marsabit Tower Network',
    location: 'Marsabit County', 
    vendor: 'Safaricom',
    progress: 75, 
    status: 'in-progress',
    updatedAt: '2023-09-15'
  },
  { 
    id: 'KEN-002',
    name: 'Turkana Expansion',
    location: 'Turkana County', 
    vendor: 'Airtel',
    progress: 30, 
    status: 'in-progress',
    updatedAt: '2023-10-02'
  },
  { 
    id: 'KEN-003',
    name: 'Kwale Coastal Network',
    location: 'Kwale County', 
    vendor: 'Telkom',
    progress: 100, 
    status: 'completed',
    updatedAt: '2023-08-24'
  },
  { 
    id: 'KEN-004',
    name: 'Kajiado Rural Connection',
    location: 'Kajiado County', 
    vendor: 'Safaricom',
    progress: 0, 
    status: 'planned',
    updatedAt: '2023-10-10'
  },
  { 
    id: 'KEN-005',
    name: 'Wajir Network Upgrade',
    location: 'Wajir County', 
    vendor: 'Airtel',
    progress: 15, 
    status: 'in-progress',
    updatedAt: '2023-10-05'
  },
];

const getStatusBadge = (status: string) => {
  switch(status) {
    case 'completed':
      return <Badge className="bg-green-500">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-blue-500">In Progress</Badge>;
    case 'planned':
      return <Badge variant="outline">Planned</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export function ProjectList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Vendor</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Update</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.location}</TableCell>
              <TableCell>{project.vendor}</TableCell>
              <TableCell>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${
                      project.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground mt-1 inline-block">
                  {project.progress}%
                </span>
              </TableCell>
              <TableCell>{getStatusBadge(project.status)}</TableCell>
              <TableCell>{project.updatedAt}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link to={`/projects/${project.id}`} className="flex items-center w-full">
                        View Details
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
