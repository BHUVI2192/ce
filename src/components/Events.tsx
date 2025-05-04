
import { useRef } from 'react';
import { Calendar } from "lucide-react";
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Tech Innovation Showcase 2024",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400",
    description: "Annual exhibition featuring student projects, research demonstrations, and industry collaboration opportunities.",
    location: "Engineering Building, Main Hall",
    link: "#"
  },
  {
    title: "AI and Ethics Workshop",
    date: "June 8, 2024",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&q=80&w=400",
    description: "A workshop exploring ethical implications of AI technologies with guest speakers from industry and academia.",
    location: "Virtual Event",
    link: "#"
  },
  {
    title: "Summer Coding Bootcamp",
    date: "July 10-24, 2024",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=400",
    description: "Intensive two-week program for students to enhance programming skills with real-world applications.",
    location: "Computer Lab 305",
    link: "#"
  },
  {
    title: "Computer Engineering Alumni Networking Event",
    date: "August 5, 2024",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=400",
    description: "Connect with alumni working in leading tech companies and explore career opportunities in the industry.",
    location: "University Conference Center",
    link: "#"
  }
];

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="events" className="bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Upcoming Events</h2>
        <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
          Join us for these exciting events hosted by the Department of Computer Engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className={cn(
                "reveal-element card overflow-hidden",
                isVisible ? "visible" : ""
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
                  <Calendar size={16} className="text-engDept-700" />
                  <span className="text-sm font-medium text-engDept-800">{event.date}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-engDept-900 mb-2">{event.title}</h3>
                <p className="text-engDept-700 mb-4">{event.description}</p>
                <p className="text-engDept-600 text-sm mb-4">
                  <strong>Location:</strong> {event.location}
                </p>
                <Button asChild>
                  <a href={event.link} className="inline-block">
                    Register Now
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#" className="inline-block">
              View All Events
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
