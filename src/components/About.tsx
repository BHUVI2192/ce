
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="about" className="bg-gradient-to-b from-white to-engDept-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading relative mb-16 pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-engDept-600 after:to-engDept-800 after:rounded-full">
          About Our Department
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "reveal-element transform transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="rounded-lg overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Computer Engineering Department" 
                className="w-full h-auto hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className={cn(
            "reveal-element transform transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <h3 className="text-2xl font-bold text-engDept-800 mb-4 bg-gradient-to-r from-engDept-700 to-engDept-900 bg-clip-text text-transparent">
              Excellence in Computing Education
            </h3>
            <p className="text-engDept-700 mb-6 border-l-4 border-engDept-500 pl-4">
              The Department of Computer Engineering has been at the forefront of computing education and research since its establishment. We focus on providing students with cutting-edge knowledge and practical skills in hardware, software, and integrated systems.
            </p>
            <p className="text-engDept-700 mb-6">
              Our curriculum blends theoretical foundations with hands-on experience, preparing graduates to solve complex technological challenges and lead innovation in the rapidly evolving field of computer engineering.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-engDept-100 to-engDept-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-engDept-800 text-2xl">25+</h4>
                <p className="text-engDept-600">Faculty Members</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-engDept-100 to-engDept-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-engDept-800 text-2xl">500+</h4>
                <p className="text-engDept-600">Enrolled Students</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-engDept-100 to-engDept-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-engDept-800 text-2xl">8</h4>
                <p className="text-engDept-600">Specialized Labs</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-engDept-100 to-engDept-200 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="font-bold text-engDept-800 text-2xl">95%</h4>
                <p className="text-engDept-600">Employment Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
