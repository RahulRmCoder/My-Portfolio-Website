
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.setProperty('--x', `${x * 20}px`);
      heroRef.current.style.setProperty('--y', `${y * 20}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4" ref={heroRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-darkest via-theme-dark to-theme-dark opacity-90"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div 
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">Hello, I'm</span>
            <br />
            <span className="text-theme-light">Your Name</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-theme-light/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full Stack Developer & Designer
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-theme-teal to-theme-amber rounded-lg hover:opacity-90 transition-opacity text-theme-darkest font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#about"
              className="px-6 py-3 border border-theme-light/20 hover:border-theme-teal rounded-lg transition-colors text-theme-light"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            delay: 0.2,
            duration: 0.8 
          }}
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-teal to-theme-amber rounded-full blur-md opacity-70"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-theme-dark h-64 w-64 md:h-80 md:w-80 shadow-xl" style={{ transform: 'translate(var(--x), var(--y))' }}>
              <motion.img
                src="/lovable-uploads/b70d0b05-44cd-4063-a402-e3699b5abd09.png"
                alt="Profile Image"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
