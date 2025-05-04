
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const quickLinks = [
  { name: 'Admissions', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Curriculum', href: '#' },
  { name: 'Research', href: '#' },
  { name: 'Student Resources', href: '#' },
  { name: 'Faculty Directory', href: '#' },
  { name: 'Alumni Network', href: '#' },
  { name: 'Careers', href: '#' }
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
  { name: 'Instagram', href: '#', icon: Instagram }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-engDept-800 text-white">
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
            <p className="mb-6">
              Preparing the next generation of computing professionals through excellence in education, research, and innovation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>123 University Avenue, City, State 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:compe.dept@university.edu" className="hover:underline">compe.dept@university.edu</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-engDept-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-engDept-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-engDept-600 pb-2">Resources</h3>
            <ul className="space-y-2">
              {quickLinks.slice(4).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-engDept-300 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-engDept-600 pb-2">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for updates on events, research, and opportunities.</p>
            <form className="flex mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md text-engDept-900 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-engDept-600 px-4 py-2 rounded-r-md hover:bg-engDept-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-engDept-300 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-engDept-600 pt-6 mt-8 text-sm text-center">
          <p>&copy; {currentYear} Department of Computer Engineering. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="hover:text-engDept-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-engDept-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-engDept-300 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
