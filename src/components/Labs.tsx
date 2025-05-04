
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const labs = [
  {
    name: "Artificial Intelligence Lab",
    description: "Equipped with high-performance computing resources for machine learning and AI research, including NVIDIA DGX systems and specialized robotics hardware.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Computer Architecture Lab",
    description: "Features FPGA development boards, digital logic trainers, and computer organization experimental setups for hardware design and testing.",
    image: "https://images.unsplash.com/photo-1598424515637-d0d05b9e66fd?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Networking & Security Lab",
    description: "State-of-the-art networking equipment and security tools for experiments in computer networks, protocols, and cybersecurity.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Software Engineering Lab",
    description: "Collaborative workspace with software development tools, version control systems, and testing frameworks for agile software development.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Embedded Systems Lab",
    description: "Houses microcontrollers, IoT devices, and embedded system development platforms for building and testing specialized computing systems.",
    image: "https://images.unsplash.com/photo-1601101294812-9a7fc7e4015f?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Virtual Reality Lab",
    description: "Cutting-edge VR/AR equipment including headsets, motion capture systems, and development environments for immersive computing applications.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Labs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="labs" className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Labs & Infrastructure</h2>
        <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
          Our department houses state-of-the-art laboratories that provide students with hands-on experience and support cutting-edge research in various domains of computer engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab, index) => (
            <div
              key={lab.name}
              className={cn(
                "reveal-element card overflow-hidden hover:transform hover:scale-105 transition-all duration-300",
                isVisible ? "visible" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={lab.image} 
                alt={lab.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-engDept-900 mb-3">{lab.name}</h3>
                <p className="text-engDept-700">{lab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
