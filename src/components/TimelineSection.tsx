
import { Briefcase, School } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string;
}

interface TimelineSectionProps {
  title: string;
  items: TimelineItem[];
  type: 'experience' | 'education';
}

const TimelineSection = ({ title, items, type }: TimelineSectionProps) => {
  return (
    <section id={type} className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            {title}
          </span>
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-theme-light/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div 
                key={item.id}
                className="relative pl-8 timeline-dot animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="glass-card p-6">
                  <div className="flex items-start justify-between mb-2 flex-col sm:flex-row gap-2">
                    <h3 className="text-xl font-bold text-theme-light">{item.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-theme-darker text-theme-light/70">
                      {item.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {type === 'experience' ? (
                      <Briefcase size={16} className="text-theme-teal" />
                    ) : (
                      <School size={16} className="text-theme-teal" />
                    )}
                    <span className="text-theme-light/80">{item.organization}</span>
                  </div>
                  
                  <p className="text-theme-light/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
