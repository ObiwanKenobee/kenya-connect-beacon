
import React from 'react';
import { MapPin, Signal } from 'lucide-react';
import { cn } from '@/lib/utils';

type MapPlaceholderProps = {
  className?: string;
};

export function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-muted", className)}>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center mb-4">
          <MapPin className="h-8 w-8 text-muted-foreground/50" />
        </div>
        <h3 className="text-lg font-medium mb-2">Map Visualization</h3>
        <p className="text-muted-foreground max-w-md mb-6">
          Interactive coverage mapping will appear here, showing current towers, signal strength, and underserved areas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          {[
            { icon: MapPin, label: '134 Towers', color: 'bg-kenya-green/20 text-kenya-green' },
            { icon: Signal, label: '67% Coverage', color: 'bg-kenya-teal/20 text-kenya-teal' },
            { icon: Signal, label: '26 Counties', color: 'bg-kenya-red/20 text-kenya-red' },
          ].map((item, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-background/80 border shadow-sm"
            >
              <div className={cn("w-10 h-10 rounded-md flex items-center justify-center", item.color)}>
                <item.icon className="h-5 w-5" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
