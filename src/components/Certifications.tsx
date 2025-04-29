
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certificationsData } from '@/data/certificationsData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-theme-darker">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">
            Certifications & Training
          </span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="glass-card h-full p-6"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 overflow-hidden rounded-lg aspect-video">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <motion.div
                      className="p-3 rounded-full bg-theme-darker/80 text-theme-teal"
                      whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award size={24} />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-theme-light">{cert.title}</h3>
                    <p className="text-theme-light/60 mb-1 text-sm">{cert.issuer}</p>
                    <p className="text-theme-light/60 mb-4 text-sm">{cert.date}</p>
                    
                    {cert.credentialLink && (
                      <motion.a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-theme-teal hover:text-theme-amber transition-colors text-sm"
                        whileHover={{ x: 5 }}
                      >
                        View Credential <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
