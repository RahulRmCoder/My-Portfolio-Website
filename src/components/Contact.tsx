
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-teal to-theme-amber">Get In Touch</span>
        </h2>
        
        <div className="max-w-3xl mx-auto glass-card p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-theme-light">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="mr-3 text-theme-teal" />
                  <span className="text-theme-light/80">youremail@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3 text-theme-teal" />
                  <span className="text-theme-light/80">+1 234 567 890</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-8 text-theme-light">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Github size={20} />
                </a>
                <a href="#" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-theme-light">Send a Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-theme-teal to-theme-amber rounded-lg text-theme-darkest font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
