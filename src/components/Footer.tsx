
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Research', href: '/research' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Events', href: '/events' },
];

const resourceLinks = [
  { name: 'Admissions', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Curriculum', href: '#' },
  { name: 'Student Resources', href: '#' },
  { name: 'Alumni Network', href: '#' },
  { name: 'Careers', href: '#' }
];

// Only Instagram social link
const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/c0de_ce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: Instagram
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Department Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/3051a88a-8fd4-42b1-a4a2-514d83490aa3.png" 
                alt="Department Logo" 
                className="h-10 w-10 bg-white p-1 rounded-md"
              />
              <h3 className="text-xl font-bold">Computer Engineering</h3>
            </div>
            <p className="mb-6 text-blue-100">
              Preparing the next generation of computing professionals through excellence in education, research, and innovation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-200">
                <MapPin size={18} />
                <span>PES University, Bangalore, Karnataka</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Mail size={18} />
                <a href="mailto:hodce@pestrust.edu.in" className="hover:text-blue-100 hover:underline">hodce@pestrust.edu.in</a>
              </li>
              <li className="flex items-center gap-3 text-blue-200">
                <Phone size={18} />
                <a href="tel:+919480000992" className="hover:text-blue-100 hover:underline">+91 94800 00992</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Only Instagram */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-blue-700 pb-2">Stay Connected</h3>
            <p className="text-blue-200 mb-4">Follow us on Instagram for updates on events, research, and opportunities.</p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 mt-8 text-sm text-blue-300 text-center">
          <p>&copy; {currentYear} Department of Computer Engineering, PES University. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

