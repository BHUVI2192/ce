import { useRef } from 'react';
import { Award, Briefcase, Code } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
          Achievements
        </h2>
        
        {/* Hackathon Achievements */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700/50 p-3 rounded-full">
              <Code className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-blue-100">Hackathon Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={cn(
              "bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
              style={{ transitionDelay: "100ms" }}>
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">National Coding Championship</h4>
              <p className="text-blue-100">First place in the national coding championship organized by TechFest India 2023.</p>
              <div className="mt-4 flex">
                <img src="/lovable-uploads/ca84ed63-4325-49e6-b7a2-e7c1e5fa7be5.png" 
                     alt="Students at Tech Event" 
                     className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
            
            <div className={cn(
              "bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
              style={{ transitionDelay: "200ms" }}>
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">IoT Solution Challenge</h4>
              <p className="text-blue-100">Second place in the Smart City IoT solution challenge organized by Microsoft.</p>
              <div className="mt-4 flex">
                <img src="/lovable-uploads/d3fbaa3e-edef-438a-8fb9-6ff99ad2021d.png" 
                     alt="IoT Project Demo" 
                     className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
            
            <div className={cn(
              "bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
              style={{ transitionDelay: "300ms" }}>
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">AI Hackathon</h4>
              <p className="text-blue-100">Top 5 finalist in the International AI Hackathon organized by Google.</p>
              <div className="mt-4 flex">
                <img src="/lovable-uploads/01f3a07d-cbf8-4e41-9a7b-345b424ce1ba.png"
                     alt="AI Hackathon Team" 
                     className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Internship Achievements */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700/50 p-3 rounded-full">
              <Briefcase className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-blue-100">Internship Placements</h3>
          </div>
          
          <div className={cn(
            "bg-gradient-to-r from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-200 mb-1">25+</div>
                <p className="text-blue-300">Students placed at Google</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-200 mb-1">30+</div>
                <p className="text-blue-300">Students placed at Microsoft</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-200 mb-1">20+</div>
                <p className="text-blue-300">Students placed at Amazon</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-200 mb-1">50+</div>
                <p className="text-blue-300">Students at other top companies</p>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="/lovable-uploads/beff8104-287b-49dc-953c-46c3afcee135.png" 
                     alt="Student group at company visit" 
                     className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div>
                <img src="/lovable-uploads/0e667ce6-c4d7-4f05-8422-50fea3c68591.png" 
                     alt="Students at company talk" 
                     className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-700/50 p-3 rounded-full">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-blue-100">Academic & Research Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={cn(
              "bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
              style={{ transitionDelay: "400ms" }}>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">Research Publications</h4>
              <p className="text-blue-100 mb-4">Our students and faculty have published over 50 research papers in prestigious international journals and conferences.</p>
              <div className="flex justify-center">
                <img src="/lovable-uploads/cc140892-4ce5-4367-8259-78011b72f410.png" 
                     alt="Research presentation" 
                     className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
            
            <div className={cn(
              "bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
              style={{ transitionDelay: "500ms" }}>
              <h4 className="text-xl font-semibold text-blue-200 mb-2">Patents & Innovations</h4>
              <p className="text-blue-100 mb-4">Our department has filed 5 patents in the last academic year, showcasing our commitment to innovation.</p>
              <div className="flex justify-center">
                <img src="/lovable-uploads/d37ff7c8-fa66-464b-b038-11fc4f08aad8.png" 
                     alt="Innovation showcase" 
                     className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
