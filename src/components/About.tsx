
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="about-department" className="bg-gradient-to-b from-blue-100 to-purple-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="relative mb-16 pb-4 text-3xl md:text-4xl font-bold text-blue-900 text-center after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
          About Our Department
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "transform transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="rounded-lg overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 bg-gradient-to-r p-1 from-blue-400 to-purple-400">
              <img 
                src="/lovable-uploads/82a6248a-d6e3-4bda-b79c-e9240d5cc439.png" 
                alt="Department Activities" 
                className="w-full h-auto hover:scale-105 transition-all duration-500 rounded"
              />
            </div>
          </div>
          
          <div className={cn(
            "transform transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Excellence in Computing Education
            </h3>
            <p className="text-blue-800 mb-6 border-l-4 border-purple-500 pl-4">
              The Computer Engineering department is distinct from Computer Science by focusing on hardware-software integration. We design and develop systems that combine physical hardware and digital software to create innovative solutions.
            </p>
            <p className="text-blue-800 mb-6">
              Our curriculum blends theoretical foundations with hands-on experience in computing hardware, embedded systems, digital electronics, and networking technologies, preparing graduates for careers in hardware design, IoT, robotics, and system integration.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-blue-800 text-2xl">3+</h4>
                <p className="text-blue-600">Faculty Members</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-blue-800 text-2xl">500+</h4>
                <p className="text-blue-600">Enrolled Students</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-blue-800 text-2xl">8</h4>
                <p className="text-blue-600">Specialized Labs</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-purple-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-blue-800 text-2xl">95%</h4>
                <p className="text-blue-600">Employment Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
