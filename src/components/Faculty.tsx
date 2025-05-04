
import { useEffect, useRef } from 'react';
import { Linkedin, Mail, Phone } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const facultyMembers = [
  {
    name: "Dr. Sarah Johnson",
    title: "Department Chair, Professor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    specialization: "Machine Learning & AI",
    email: "sarah.johnson@university.edu",
    phone: "+1 (555) 123-4567",
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
    specialization: "Computer Architecture",
    email: "michael.chen@university.edu",
    phone: "+1 (555) 123-4568",
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Dr. Lakshmi Patel",
    title: "Associate Professor",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=300",
    specialization: "Computer Networks",
    email: "lakshmi.patel@university.edu",
    phone: "+1 (555) 123-4569",
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Dr. James Wilson",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=300",
    specialization: "Cybersecurity",
    email: "james.wilson@university.edu",
    phone: "+1 (555) 123-4570",
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Dr. Sofia Rodriguez",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
    specialization: "Embedded Systems",
    email: "sofia.rodriguez@university.edu",
    phone: "+1 (555) 123-4571",
    linkedin: "https://linkedin.com/in/"
  },
  {
    name: "Dr. David Kim",
    title: "Lecturer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    specialization: "Software Engineering",
    email: "david.kim@university.edu",
    phone: "+1 (555) 123-4572",
    linkedin: "https://linkedin.com/in/"
  },
];

export default function Faculty() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="faculty" className="bg-engDept-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Faculty</h2>
        <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
          Our department is home to world-class faculty members dedicated to advancing knowledge in computer engineering through research and excellence in teaching.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={cn(
                "reveal-element bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
                isVisible ? "visible" : "",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-engDept-900 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a href={`mailto:${member.email}`} className="text-white bg-engDept-700 p-2 rounded-full hover:bg-engDept-600 transition-colors">
                      <Mail size={20} />
                    </a>
                    <a href={`tel:${member.phone}`} className="text-white bg-engDept-700 p-2 rounded-full hover:bg-engDept-600 transition-colors">
                      <Phone size={20} />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white bg-engDept-700 p-2 rounded-full hover:bg-engDept-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-engDept-900">{member.name}</h3>
                <p className="text-engDept-600">{member.title}</p>
                <p className="text-engDept-500 text-sm mt-2">Specialization: {member.specialization}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-block px-6 py-3 rounded-lg border border-engDept-800 text-engDept-800 font-medium hover:bg-engDept-800 hover:text-white transition-colors"
          >
            View All Faculty Members
          </a>
        </div>
      </div>
    </section>
  );
}
