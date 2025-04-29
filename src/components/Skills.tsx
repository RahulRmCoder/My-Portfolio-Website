
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const skillsData: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    { name: 'SQL', level: 65, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Docker', level: 60, category: 'tools' },
    { name: 'AWS', level: 55, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];
  
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 px-4 bg-theme-darker" ref={skillsRef}>
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            My Skills
          </span>
        </motion.h2>
        
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-2 p-1 bg-theme-darkest/50 rounded-lg">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-theme-teal to-theme-amber text-theme-darkest'
                    : 'text-theme-light/70 hover:text-theme-light'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="glass-card p-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-8">
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-theme-light">{skill.name}</span>
                  <span className="text-theme-light/70">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: "0%" }}
                    animate={{ width: isVisible ? `${skill.level}%` : "0%" }}
                    transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
