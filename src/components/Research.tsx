
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const researchAreas = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Research in advanced AI algorithms, deep learning, computer vision, and natural language processing to solve complex engineering problems.",
    icon: "🤖",
  },
  {
    title: "Internet of Things (IoT)",
    description: "Development of intelligent connected systems, sensor networks, and edge computing solutions for smart environments and industry applications.",
    icon: "📱",
  },
  {
    title: "Cybersecurity",
    description: "Investigating cutting-edge techniques for secure computing, cryptography, vulnerability assessment, and protection against emerging threats.",
    icon: "🔒",
  },
  {
    title: "Embedded Systems",
    description: "Design and implementation of efficient hardware-software systems for real-time applications in various domains.",
    icon: "🔌",
  },
  {
    title: "Computer Networks",
    description: "Research in next-generation network architectures, protocols, wireless communications, and network security.",
    icon: "🌐",
  },
  {
    title: "Big Data Analytics",
    description: "Novel approaches for processing, analyzing and visualizing massive datasets to extract meaningful insights and patterns.",
    icon: "📊",
  }
];

export default function Research() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
          Research Areas
        </h2>
        
        <p className="text-blue-800 text-center max-w-3xl mx-auto mb-12">
          Our faculty and students engage in cutting-edge research across various domains of computer engineering, contributing to technological advancements and innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className={cn(
                "bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 border border-blue-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{area.title}</h3>
              <p className="text-blue-700">{area.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Research Publications</h3>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-blue-800">Machine Learning Approaches for Predictive Maintenance in IoT Systems</h4>
              <p className="text-blue-600 text-sm mt-1">Dr. Chethan L S, IEEE International Conference on IoT, 2023</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-blue-800">Security Framework for Edge Computing in Industrial Applications</h4>
              <p className="text-blue-600 text-sm mt-1">Mrs. Yojana Yadav, Journal of Computer Engineering & Applications, 2022</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h4 className="font-semibold text-blue-800">Optimized Resource Allocation in Cloud Computing Environments</h4>
              <p className="text-blue-600 text-sm mt-1">Mrs. Arpitha J C, International Journal of Advanced Computing, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
