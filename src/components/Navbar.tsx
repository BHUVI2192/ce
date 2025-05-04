
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Faculty', href: '#faculty' },
  { name: 'Labs', href: '#labs' },
  { name: 'Activities', href: '#activities' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scrolling to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Set scrolled state for navbar styling
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = navItems.map(item => item.name.toLowerCase());
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/3051a88a-8fd4-42b1-a4a2-514d83490aa3.png" 
            alt="Department Logo" 
            className="h-10 w-10 mr-3"
          />
          <a href="#home" className="font-bold text-xl text-engDept-900">Computer Engineering</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "nav-link",
                activeSection === item.name.toLowerCase() ? "active" : ""
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-engDept-800 hover:text-engDept-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-engDept-800 hover:text-engDept-600 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
