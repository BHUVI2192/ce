
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-engDept-100 to-engDept-200 py-20"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1920')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <img 
          src="/lovable-uploads/3051a88a-8fd4-42b1-a4a2-514d83490aa3.png" 
          alt="Department Logo" 
          className="h-32 md:h-40 mx-auto mb-8 opacity-0 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-engDept-900 mb-6 opacity-0 animate-fade-in-delay-1">
          Computer Engineering
        </h1>
        <p className="text-xl md:text-2xl text-engDept-700 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-delay-2">
          Innovating the future through computation, creativity, and technical excellence
        </p>
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-3">
          <a 
            href="#about" 
            className="px-6 py-3 rounded-lg bg-engDept-800 text-white font-medium hover:bg-engDept-700 transition-colors"
          >
            Discover Our Department
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-lg border border-engDept-800 text-engDept-800 font-medium hover:bg-engDept-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-engDept-800 hover:text-engDept-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
