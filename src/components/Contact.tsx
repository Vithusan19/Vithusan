import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = 'service_1762dft';
  const templateID = 'template_bu0e4gl';
  const publicKey = 'EZbNKPTb6M1jpiyyd';

  try {
    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    );

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    toast({
      title: "Error sending message.",
      description: "Please try again later.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading">Contact Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-lg mb-6">
            Get in touch with me for opportunities, questions, or just to say hello. I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a 
                  href="mailto:jane.doe@example.com" 
                  className="text-muted-foreground hover:text-brand-blue transition-colors"
                >
                 vithu0919@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-brand-blue transition-colors"
                >
                  +94 (076) 391-5184
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-blue/10 rounded-full text-brand-blue">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Chavakachcheri, Jaffna</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Vithusan19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-brand-blue hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vithusan1909/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-full hover:bg-brand-blue hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 font-heading">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                placeholder="John Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="contact-input resize-none"
                placeholder="How can I help you?"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
