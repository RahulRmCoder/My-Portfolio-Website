
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Email service implementation
      // Using EmailJS as an example (you would need to add this dependency)
      // This part would be replaced with your actual email sending implementation
      const serviceId = "YOUR_EMAILJS_SERVICE_ID";
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
      const userId = "YOUR_EMAILJS_USER_ID";
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            from_name: data.name,
            from_email: data.email,
            message: data.message
          }
        })
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you! Your message has been sent successfully.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Name" 
                            {...field}
                            className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal"
                          />
                        </FormControl>
                        <FormMessage className="text-theme-amber text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Email" 
                            type="email" 
                            {...field}
                            className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal"
                          />
                        </FormControl>
                        <FormMessage className="text-theme-amber text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Message" 
                            {...field}
                            className="w-full px-4 py-2 bg-theme-darkest border border-theme-light/20 rounded-lg text-theme-light placeholder:text-theme-light/50 focus:outline-none focus:border-theme-teal resize-none"
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage className="text-theme-amber text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-theme-teal to-theme-amber rounded-lg text-theme-darkest font-medium hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
