
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-theme-darker">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-theme-light">Who I Am</h3>
            <p className="text-theme-light/80 mb-4">
              I'm a passionate full stack developer with a keen eye for design and a strong foundation in modern web technologies. 
              With years of experience building responsive and intuitive applications, I strive to create engaging user experiences 
              that solve real-world problems.
            </p>
            <p className="text-theme-light/80 mb-6">
              My journey in tech started with a curiosity about how things work, which evolved into a career building elegant solutions 
              for complex challenges. I'm constantly learning and exploring new technologies to stay at the forefront of development.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-theme-teal font-bold text-lg">20+</p>
                <p className="text-sm text-theme-light/70">Projects Completed</p>
              </div>
              <div>
                <p className="text-theme-teal font-bold text-lg">5+</p>
                <p className="text-sm text-theme-light/70">Years Experience</p>
              </div>
              <div>
                <p className="text-theme-teal font-bold text-lg">15+</p>
                <p className="text-sm text-theme-light/70">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-4 text-theme-light">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-theme-light/60 text-sm">Name</p>
                  <p className="text-theme-light">Your Name</p>
                </div>
                <div>
                  <p className="text-theme-light/60 text-sm">Email</p>
                  <p className="text-theme-light">youremail@example.com</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-theme-light/60 text-sm">Location</p>
                  <p className="text-theme-light">City, Country</p>
                </div>
                <div>
                  <p className="text-theme-light/60 text-sm">Availability</p>
                  <p className="text-theme-light">Freelance / Full-time</p>
                </div>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center text-theme-teal hover:text-theme-amber transition-colors mt-4"
              >
                <span>Download Resume</span>
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
