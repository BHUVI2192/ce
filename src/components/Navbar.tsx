
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Research', href: '/research' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Events', href: '/events' },
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-gradient-to-r from-blue-900 to-purple-900 shadow-md py-2" : "bg-gradient-to-r from-blue-800 to-purple-800 py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/3051a88a-8fd4-42b1-a4a2-514d83490aa3.png" 
            alt="Department Logo" 
            className="h-10 w-10 mr-3 bg-white p-1 rounded-full"
          />
          <Link to="/" className="font-bold text-xl text-white">Computer Engineering</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-white hover:text-blue-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-300 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-white hover:text-blue-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-800 to-purple-900 border-t border-blue-700">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-white hover:text-blue-200 border-b border-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
