import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Research from '@/components/Research';

const ResearchPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Research - Department of Computer Engineering";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Research</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Advancing knowledge and innovation in computer engineering through cutting-edge research
            </p>
          </div>
        </div>
      </section>
      
      {/* Research Areas Section */}
      <Research />
      
      {/* Research Labs */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Research Laboratories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI & Machine Learning Lab */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Place for lab image */}
              <div className="h-48 flex items-center justify-center bg-blue-50">
                <span className="text-blue-300 text-lg font-semibold opacity-70">Upload Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">AI & Machine Learning Lab</h3>
                <p className="text-blue-700 mb-4">
                  Equipped with high-performance computing resources for research in artificial intelligence, 
                  deep learning, computer vision, and natural language processing.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Key Equipment:</h4>
                  <ul className="text-blue-700 list-disc pl-5">
                    <li>NVIDIA GPU workstations for deep learning</li>
                    <li>Specialized datasets and software tools</li>
                    <li>Robotics equipment for AI applications</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* IoT & Embedded Systems Lab */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 flex items-center justify-center bg-blue-50">
                <span className="text-blue-300 text-lg font-semibold opacity-70">Upload Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">IoT & Embedded Systems Lab</h3>
                <p className="text-blue-700 mb-4">
                  Focuses on research and development of Internet of Things applications, 
                  embedded systems, and sensor networks for various domains.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Key Equipment:</h4>
                  <ul className="text-blue-700 list-disc pl-5">
                    <li>Various microcontroller platforms (Arduino, ESP, etc.)</li>
                    <li>Sensor arrays for environmental monitoring</li>
                    <li>IoT connectivity modules and gateways</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Software Engineering Lab */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 flex items-center justify-center bg-blue-50">
                <span className="text-blue-300 text-lg font-semibold opacity-70">Upload Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Software Engineering Lab</h3>
                <p className="text-blue-700 mb-4">
                  Dedicated to research in software development methodologies, testing techniques, 
                  quality assurance, and project management approaches.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Key Equipment:</h4>
                  <ul className="text-blue-700 list-disc pl-5">
                    <li>Software development environments and tools</li>
                    <li>Testing and quality assurance frameworks</li>
                    <li>Collaborative development platforms</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Cybersecurity Lab */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 flex items-center justify-center bg-blue-50">
                <span className="text-blue-300 text-lg font-semibold opacity-70">Upload Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Cybersecurity Lab</h3>
                <p className="text-blue-700 mb-4">
                  Focused on network security, cryptography, ethical hacking, and digital forensics research 
                  to address emerging cybersecurity challenges.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Key Equipment:</h4>
                  <ul className="text-blue-700 list-disc pl-5">
                    <li>Network security testing equipment</li>
                    <li>Digital forensics tools and software</li>
                    <li>Isolated environment for security research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research Collaborations */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
            Research Collaborations
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-100 mb-6">Academic Partners</h3>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">Indian Institute of Technology, Bangalore</h4>
                  <p className="text-blue-100 mt-2">
                    Joint research project on AI-powered IoT solutions for smart agriculture
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">Stanford University, USA</h4>
                  <p className="text-blue-100 mt-2">
                    Faculty exchange program and collaborative research in machine learning applications
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">National University of Singapore</h4>
                  <p className="text-blue-100 mt-2">
                    Research collaboration on cybersecurity for critical infrastructure protection
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-100 mb-6">Industry Partners</h3>
              
              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">Microsoft Research India</h4>
                  <p className="text-blue-100 mt-2">
                    Collaborative research on cloud computing optimization and AI for edge computing
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">IBM Research Labs</h4>
                  <p className="text-blue-100 mt-2">
                    Joint projects on quantum computing applications for cryptography and optimization problems
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-blue-200">Infosys Innovation Hub</h4>
                  <p className="text-blue-100 mt-2">
                    Industry-sponsored research on blockchain applications for supply chain management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ResearchPage;
