
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Faculty from '@/components/Faculty';
import Labs from '@/components/Labs';
import Activities from '@/components/Activities';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add meta tags for SEO
    document.title = "Department of Computer Engineering";
    
    // Set up smooth scrolling behavior for anchor links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const href = target.getAttribute('href');
        if (!href) return;
        
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    // Animation on scroll setup for elements with reveal-element class
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.reveal-element');
      elements.forEach(el => observer.observe(el));

      return observer;
    };

    const observer = observeElements();

    return () => {
      document.removeEventListener('click', handleLinkClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Faculty />
      <Labs />
      <Activities />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
