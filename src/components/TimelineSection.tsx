
import { Briefcase, School } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            {title}
          </span>
        </motion.h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-theme-light/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          ></motion.div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <motion.div 
                key={item.id}
                className="relative pl-8 timeline-dot"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 70
                }}
              >
                <motion.div 
                  className="glass-card p-6"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-2 flex-col sm:flex-row gap-2">
                    <h3 className="text-xl font-bold text-theme-light">{item.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-theme-darker text-theme-light/70">
                      {item.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    >
                      {type === 'experience' ? (
                        <Briefcase size={16} className="text-theme-teal" />
                      ) : (
                        <School size={16} className="text-theme-teal" />
                      )}
                    </motion.div>
                    <span className="text-theme-light/80">{item.organization}</span>
                  </div>
                  
                  <motion.p 
                    className="text-theme-light/70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
