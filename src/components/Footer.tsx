
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-theme-darkest">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-theme-light/60">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
