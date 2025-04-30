import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({ 
    opacity: 1, 
    scale: 1,
    transition: { 
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-theme-darker">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">About Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="glass-card p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-theme-light">Who Am I</h3>
            <motion.p 
              className="text-theme-light/80 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I am a Computer Engineering student at Jain University with
 strong skills in Python, machine learning, and web development.
 Through internships and hackathons, I have gained practical
 experience in machine learning projects and chatbot
 development. My academic projects, including an AI Text
 Processing Application, Word Weave (a blogging website), and
 CraveCrafters (a food ordering web application), demonstrate
 my ability to apply technical knowledge to real-world problems.
 I am eager to contribute my skills and passion for technology to
 drive innovation in your company.
            </motion.p>
            <motion.p 
              className="text-theme-light/80 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              My journey in tech started with a curiosity about how things work, which evolved into a career building elegant solutions 
              for complex challenges. I'm constantly learning and exploring new technologies to stay at the forefront of development.
            </motion.p>
            
            <div className="flex flex-wrap gap-6">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '3+', label: 'Years Experience in Coding' },
                { value: '100+', label: 'Leet Code Questions solved' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={statVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-theme-teal font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-theme-light/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-card p-6"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-theme-light">Personal Information</h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <p className="text-theme-light/60 text-sm">Name</p>
                  <p className="text-theme-light">Rahul Rajasekharan Menon</p>
                </div>
                <div>
                  <p className="text-theme-light/60 text-sm">Email</p>
                  <p className="text-theme-light break-all">rahulrajasekharanmenon64325@gmail.com</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-theme-light/60 text-sm">Location</p>
                  <p className="text-theme-light">Bengaluru, India</p>
                </div>
                <div>
                  <p className="text-theme-light/60 text-sm">Availability</p>
                  <p className="text-theme-light">Intern / Full-time</p>
                </div>
              </div>
              
              <motion.a 
                href="https://docs.google.com/document/d/11cnAvMgFQlUKJwKxs3tJ-l7c7ejDQLeUDKcCMqN5fOk/edit?usp=drive_link" 
                className="inline-flex items-center text-theme-teal hover:text-theme-amber transition-colors mt-4"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Resume</span>
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;