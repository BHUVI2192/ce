
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const activities = [
  {
    title: "ACM Student Chapter",
    description: "Our ACM student chapter organizes regular coding competitions, tech talks, and workshops to promote computing knowledge and professional development.",
    icon: "🖥️"
  },
  {
    title: "Hackathons",
    description: "We host annual hackathons where students collaborate to solve real-world problems through innovative software and hardware solutions.",
    icon: "🚀"
  },
  {
    title: "Research Groups",
    description: "Students can join various research groups focusing on AI, cybersecurity, embedded systems, and more, working closely with faculty mentors.",
    icon: "🔬"
  },
  {
    title: "Industry Collaborations",
    description: "We maintain strong ties with industry partners, offering internship opportunities, sponsored projects, and guest lectures from industry professionals.",
    icon: "🤝"
  }
];

const achievements = [
  {
    title: "National Robotics Competition 2024",
    date: "March 2024",
    description: "First place in the autonomous navigation category, demonstrating excellence in AI and robotics.",
    highlight: true
  },
  {
    title: "IEEE Best Paper Award",
    date: "December 2023",
    description: "Faculty and graduate students received recognition for groundbreaking research in quantum computing applications.",
    highlight: false
  },
  {
    title: "Microsoft Imagine Cup Regional Finalists",
    date: "October 2023",
    description: "Student team advanced to regional finals with an innovative healthcare monitoring system using IoT and machine learning.",
    highlight: true
  },
  {
    title: "NSF Research Grant",
    date: "July 2023",
    description: "$1.2 million grant awarded for pioneering research in secure edge computing architectures.",
    highlight: false
  }
];

export default function Activities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section id="activities" className="bg-engDept-100 py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="section-heading">Student Activities</h2>
          <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
            Our department offers various extracurricular activities that enhance learning and foster collaboration among students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={activity.title}
                className={cn(
                  "reveal-element bg-white p-6 rounded-lg shadow-md flex items-start gap-4",
                  isVisible ? "visible" : ""
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl">{activity.icon}</div>
                <div>
                  <h3 className="font-bold text-xl text-engDept-800 mb-2">{activity.title}</h3>
                  <p className="text-engDept-700">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="achievements">
          <h2 className="section-heading">Achievements</h2>
          <p className="text-engDept-700 text-center max-w-3xl mx-auto mb-12">
            Our faculty and students consistently achieve excellence in research, competitions, and industry collaborations.
          </p>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className={cn(
                  "reveal-element",
                  isVisible ? "visible" : ""
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "bg-white p-6 rounded-lg shadow-md border-l-4",
                  achievement.highlight ? "border-engDept-700" : "border-engDept-400"
                )}>
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <h3 className="font-bold text-xl text-engDept-800">{achievement.title}</h3>
                    <span className="inline-block px-3 py-1 bg-engDept-200 text-engDept-700 text-sm rounded-full">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-engDept-700">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
