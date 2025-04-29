
import { useEffect, useRef } from 'react';

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
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">Hello, I'm</span>
            <br />
            <span className="text-theme-light">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-theme-light/80 mb-8">
            Full Stack Developer & Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-theme-teal to-theme-amber rounded-lg hover:opacity-90 transition-opacity text-theme-darkest font-medium"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-theme-light/20 hover:border-theme-teal rounded-lg transition-colors text-theme-light"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-theme-teal to-theme-amber rounded-full blur-md opacity-70"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-theme-dark h-64 w-64 md:h-80 md:w-80 shadow-xl" style={{ transform: 'translate(var(--x), var(--y))' }}>
              <img
                src="/lovable-uploads/b70d0b05-44cd-4063-a402-e3699b5abd09.png"
                alt="Profile Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
