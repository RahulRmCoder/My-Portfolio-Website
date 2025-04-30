import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code } from 'lucide-react';
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
      // Fixed variable names to match exactly with your .env file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Fixed variable name
      const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Debug logs (remove in production)
      console.log("Service ID:", serviceId);
      console.log("Template ID:", templateId);
      console.log("User ID:", userId);
      
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
            name: data.name,
            email: data.email,
            message: data.message,
            title: "Contact Request" // Optional: only if using {{title}} in the subject
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
        const errorData = await response.text();
        console.error("EmailJS error response:", errorData);
        throw new Error(`Failed to send message: ${errorData}`);
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
                  <Mail size={20} className="mr-3 text-theme-teal flex-shrink-0" />
                  <span className="text-theme-light/80 break-all">rahulrajasekharanmenon64325@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3 text-theme-teal flex-shrink-0" />
                  <span className="text-theme-light/80">9605861643</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 mt-8 text-theme-light">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/RahulRmCoder" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rahul-rajasekharan-menon-7b8315250/" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Linkedin size={20} />
                </a>
                <a href="https://leetcode.com/u/rahulrajasekharanmenon64325/" className="p-2 rounded-full border border-theme-light/20 hover:border-theme-teal hover:text-theme-teal transition-colors text-theme-light">
                  <Code size={20} />
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