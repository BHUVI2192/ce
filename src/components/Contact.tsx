
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Instagram } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Handler to redirect to email with given info
  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get values for better pre-filling (not strictly required by prompt, but for user-friendliness)
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || "";
    const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || "";

    // Build mailto link
    let mailto = `mailto:hodce@pestrust.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-blue-900 to-purple-900 py-20 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={cn(
            "transform transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="bg-gradient-to-r from-blue-800 to-purple-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-200">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700/50 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200">Address</h4>
                    <p className="text-blue-100">
                      Department of Computer Engineering,<br />
                      PES University,<br />
                      Bangalore, Karnataka
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700/50 rounded-lg flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200">Phone</h4>
                    <p className="text-blue-100">+91 94800 00992</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700/50 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-200">Email</h4>
                    <a href="mailto:hodce@pestrust.edu.in" className="text-blue-100 hover:underline">hodce@pestrust.edu.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transform transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <form
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg"
              onSubmit={handleSendMessage}
              autoComplete="off"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-200">Send a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full px-4 py-2 rounded-md bg-white/5 border border-blue-500/30 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 flex items-center justify-center gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </div>
            </form>
            {/* Only Instagram social icon below form */}
            <div className="flex justify-center mt-6">
              <a
                href="https://www.instagram.com/c0de_ce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
