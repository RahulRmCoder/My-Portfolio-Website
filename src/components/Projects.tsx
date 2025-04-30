import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { memo, useState, useMemo } from 'react';
import { projectsData } from '@/data/projectsData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Memoize individual project card to prevent unnecessary re-renders
const ProjectCard = memo(({ 
  project, 
  index, 
  hoveredProject, 
  setHoveredProject 
}: { 
  project: any, 
  index: number, 
  hoveredProject: number | null, 
  setHoveredProject: (id: number | null) => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        className="glass-card h-full flex flex-col overflow-hidden border-none"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"  // Add lazy loading
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-theme-darkest/80 to-transparent"></div>
        </div>
        
        <CardContent className="flex-1 p-6">
          <h3 className="text-xl font-bold mb-2 text-theme-light">{project.title}</h3>
          <p className="text-theme-light/70 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <Badge 
                key={i}
                variant="secondary" 
                className="bg-theme-darker/50 hover:bg-theme-darker text-theme-light/80"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex justify-between">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-theme-teal hover:text-theme-amber transition-colors gap-1 text-sm"
              whileHover={{ x: 5 }}
            >
              Live Demo <ExternalLink size={16} />
            </motion.a>
          )}
          
          {project.codeLink && (
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-theme-teal hover:text-theme-amber transition-colors gap-1 text-sm"
              whileHover={{ x: 5 }}
            >
              View Code <Github size={16} />
            </motion.a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
});

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Memoize projects to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => projectsData, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            My Projects
          </span>
        </motion.h2>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {memoizedProjects.map((project, index) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard 
                  project={project} 
                  index={index} 
                  hoveredProject={hoveredProject}
                  setHoveredProject={setHoveredProject}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="-left-2 md:left-3 bg-theme-amber/80 hover:bg-theme-amber text-theme-darkest border-none" />
            <CarouselNext className="-right-2 md:right-3 bg-theme-amber/80 hover:bg-theme-amber text-theme-darkest border-none" />
          </div>
        </Carousel>

        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#contact" 
            className="flex items-center gap-2 text-theme-teal hover:text-theme-amber transition-colors"
          >
            <span>See more of my work</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;