
import { useState, useRef } from 'react';
import { Mail, MapPin, Phone } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulating form submission
    toast.success("Thank you for your message! We will be in touch soon.");
    setForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-engDept-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact Us</h2>
        <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
          Have questions about our programs or want to learn more? Get in touch with the Department of Computer Engineering.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={cn(
            "reveal-element bg-white rounded-lg shadow-md p-8",
            isVisible ? "visible" : ""
          )}>
            <h3 className="text-2xl font-bold text-engDept-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-engDept-800 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-engDept-300 rounded-md focus:ring focus:ring-engDept-300 focus:border-engDept-500 outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-engDept-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-engDept-300 rounded-md focus:ring focus:ring-engDept-300 focus:border-engDept-500 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-engDept-800 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-engDept-300 rounded-md focus:ring focus:ring-engDept-300 focus:border-engDept-500 outline-none"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-engDept-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-engDept-300 rounded-md focus:ring focus:ring-engDept-300 focus:border-engDept-500 outline-none resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className={cn(
            "reveal-element space-y-8",
            isVisible ? "visible" : ""
          )}>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-engDept-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-engDept-200 p-3 mt-1">
                    <MapPin className="h-5 w-5 text-engDept-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-engDept-800">Address</h4>
                    <p className="text-engDept-700">
                      Department of Computer Engineering<br />
                      Engineering Building, Room 305<br />
                      123 University Avenue<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-engDept-200 p-3 mt-1">
                    <Mail className="h-5 w-5 text-engDept-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-engDept-800">Email</h4>
                    <p className="text-engDept-700">
                      <a href="mailto:compe.dept@university.edu" className="hover:text-engDept-600">compe.dept@university.edu</a><br />
                      <a href="mailto:compe.admissions@university.edu" className="hover:text-engDept-600">compe.admissions@university.edu</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-engDept-200 p-3 mt-1">
                    <Phone className="h-5 w-5 text-engDept-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-engDept-800">Phone</h4>
                    <p className="text-engDept-700">
                      <a href="tel:+15551234567" className="hover:text-engDept-600">+1 (555) 123-4567</a> (Main Office)<br />
                      <a href="tel:+15551234568" className="hover:text-engDept-600">+1 (555) 123-4568</a> (Student Affairs)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-80">
              {/* Replace with actual Google Maps embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215685065412!2d-73.9640368!3d40.7766707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258a29a5e7269%3A0x4a01c8df6fb3cb8!2sColumbia%20University!5e0!3m2!1sen!2sus!4v1682876687713!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Department Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
