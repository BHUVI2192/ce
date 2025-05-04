
import { useRef } from 'react';
import { Calendar } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Git Workshop",
    date: "May 15, 2024",
    image: "/lovable-uploads/1fb97713-4bcd-4192-958e-a45814b80269.png",
    description: "Hands-on workshop on Git version control system, covering basics to advanced branching strategies.",
    location: "Computer Lab 305",
    link: "#"
  },
  {
    title: "Ethnic Day",
    date: "June 8, 2024",
    image: "/lovable-uploads/9d7ca8f9-0982-4b9e-abe4-1eb5d5d546cb.png",
    description: "Annual cultural celebration showcasing the diverse cultural heritage of our students and faculty.",
    location: "University Auditorium",
    link: "#"
  },
  {
    title: "Forum Inauguration",
    date: "July 10, 2024",
    image: "/lovable-uploads/ef1fb31c-c6ff-4754-9bd3-408b10550f0c.png",
    description: "Inauguration of the Computer Engineering Forum with industry leaders as chief guests.",
    location: "Seminar Hall",
    link: "#"
  },
  {
    title: "Tech Talks",
    date: "August 5, 2024",
    image: "/lovable-uploads/52651db7-0a9d-42b8-90b0-6840e2c79f0b.png",
    description: "Series of technical talks by industry experts on emerging technologies in computer engineering.",
    location: "University Conference Center",
    link: "#"
  }
];

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
          Upcoming Events
        </h2>
        
        <p className="text-blue-800 text-center max-w-3xl mx-auto mb-12">
          Join us for these exciting events hosted by the Department of Computer Engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className={cn(
                "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                  <Calendar size={16} className="text-blue-700" />
                  <span className="text-sm font-medium text-blue-800">{event.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                <p className="text-blue-700 mb-4">{event.description}</p>
                <p className="text-blue-600 text-sm mb-4">
                  <strong>Location:</strong> {event.location}
                </p>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <a href={event.link} className="inline-block">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild className="border-blue-500 text-blue-700 hover:bg-blue-50">
            <a href="#" className="inline-block">
              View All Events
            </a>
          </Button>
        </div>
        
        {/* Past Events Gallery */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Event Gallery</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden h-40 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              <img 
                src="/lovable-uploads/2f2a9743-5ebd-4e58-809b-91bee5332ce4.png" 
                alt="Student group photo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-40 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              <img 
                src="/lovable-uploads/341ae6f4-d962-49fa-8cec-8715557295db.png" 
                alt="Department event" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-40 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              <img 
                src="/lovable-uploads/82a6248a-d6e3-4bda-b79c-e9240d5cc439.png" 
                alt="Students in classroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-40 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              <img 
                src="/lovable-uploads/d37ff7c8-fa66-464b-b038-11fc4f08aad8.png" 
                alt="Technical presentation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
