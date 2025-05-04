
import { useRef } from 'react';
import { Mail, Phone } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function HodSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="hod-section" 
      className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2500')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
          Head of Department
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={cn(
            "transform transition-all duration-700 text-center md:text-left",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-lg shadow-xl inline-block">
              <img 
                src="/lovable-uploads/067e8b5f-149a-4441-8a32-9831f90db6a6.png" 
                alt="Dr. Chethan L S" 
                className="w-64 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className={cn(
            "transform transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <h3 className="text-2xl font-bold mb-2 text-blue-200">Dr. Chethan L S</h3>
            <p className="text-xl text-blue-300 mb-4">Associate Professor & HOD</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300" />
                <a href="mailto:chethan.ls@pestrust.edu.in" className="text-blue-200 hover:underline">
                  chethan.ls@pestrust.edu.in
                </a>
              </div>
              
              <div className="bg-blue-900/50 rounded-lg p-4 space-y-2 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-blue-300">Educational Qualification:</span>
                  <span>Ph.D</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-blue-300">Academic Experience:</span>
                  <span>11 years</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg border-l-4 border-blue-400 pl-4 italic">
              "Our department strives to provide quality education and research opportunities 
              to prepare the next generation of computer engineers for the challenges of tomorrow."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
