
import { useState, useEffect, useRef } from 'react';

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
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            My Skills
          </span>
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-theme-darkest/50 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-theme-teal to-theme-amber text-theme-darkest'
                    : 'text-theme-light/70 hover:text-theme-light'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-6 max-w-3xl mx-auto">
          <div className="space-y-8">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="text-theme-light">{skill.name}</span>
                  <span className="text-theme-light/70">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: `width 1s ease-in-out ${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
