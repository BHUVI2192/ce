
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="about" className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Our Department</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "reveal-element",
            isVisible ? "visible" : ""
          )}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Computer Engineering Department" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className={cn(
            "reveal-element",
            isVisible ? "visible" : ""
          )}>
            <h3 className="text-2xl font-bold text-engDept-800 mb-4">Excellence in Computing Education</h3>
            <p className="text-engDept-700 mb-6">
              The Department of Computer Engineering has been at the forefront of computing education and research since its establishment. We focus on providing students with cutting-edge knowledge and practical skills in hardware, software, and integrated systems.
            </p>
            <p className="text-engDept-700 mb-6">
              Our curriculum blends theoretical foundations with hands-on experience, preparing graduates to solve complex technological challenges and lead innovation in the rapidly evolving field of computer engineering.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-engDept-100 rounded-lg">
                <h4 className="font-bold text-engDept-800 text-2xl">25+</h4>
                <p className="text-engDept-600">Faculty Members</p>
              </div>
              <div className="text-center p-4 bg-engDept-100 rounded-lg">
                <h4 className="font-bold text-engDept-800 text-2xl">500+</h4>
                <p className="text-engDept-600">Enrolled Students</p>
              </div>
              <div className="text-center p-4 bg-engDept-100 rounded-lg">
                <h4 className="font-bold text-engDept-800 text-2xl">8</h4>
                <p className="text-engDept-600">Specialized Labs</p>
              </div>
              <div className="text-center p-4 bg-engDept-100 rounded-lg">
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
