
import { useRef } from 'react';
import { Mail } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const facultyMembers = [
  {
    name: "Dr. Chethan L S",
    title: "Associate Professor & HOD",
    image: "/lovable-uploads/067e8b5f-149a-4441-8a32-9831f90db6a6.png",
    email: "chethan.ls@pestrust.edu.in",
    education: "Ph.D",
    experience: "11 years"
  },
  {
    name: "Mrs. Yojana Yadav",
    title: "Associate Professor",
    image: "/lovable-uploads/14f1f6d4-a8d4-46c5-8cd0-ae6afa3bb3e8.png",
    email: "yojanayadav@pestrust.edu.in",
    education: "M.Tech (Ph.D)",
    experience: "18 years"
  },
  {
    name: "Mrs. Arpitha J C",
    title: "Associate Professor",
    image: "/lovable-uploads/ec0403a2-b064-4d70-bf9e-3af19623574d.png",
    email: "admin@admin.com",
    education: "M.Tech",
    experience: "7 years"
  }
];

export default function Faculty() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="faculty" className="bg-gradient-to-b from-blue-50 to-purple-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
          Our Faculty
        </h2>
        
        <p className="text-blue-800 text-center max-w-3xl mx-auto mb-12">
          Our department is home to experienced faculty members dedicated to advancing knowledge in computer engineering through research and excellence in teaching.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={cn(
                "bg-gradient-to-r from-white to-purple-50 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
                isVisible ? "visible opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-90 flex items-end justify-center transition-all duration-300">
                  <div className="p-4 text-center w-full">
                    <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                      <Mail size={16} />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-blue-900">{member.name}</h3>
                <p className="text-blue-700">{member.title}</p>
                
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-800">Education:</span>
                    <span className="text-blue-700">{member.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-blue-800">Experience:</span>
                    <span className="text-blue-700">{member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 truncate">
                    <span className="font-semibold">Email:</span>
                    <a href={`mailto:${member.email}`} className="hover:text-blue-700 hover:underline">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
