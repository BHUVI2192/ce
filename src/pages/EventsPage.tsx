
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Events from '@/components/Events';

const EventsPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Events - Department of Computer Engineering";
    
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Stay updated with the latest events, workshops, and activities organized by our department
            </p>
          </div>
        </div>
      </section>
      
      {/* Events Section */}
      <Events />
      
      {/* Annual Events */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
            Annual Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9d7ca8f9-0982-4b9e-abe4-1eb5d5d546cb.png" 
                  alt="TechFest" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">TechFest</h3>
                  <p className="text-blue-200">September every year</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-100 mb-4">
                  Our annual flagship technical festival featuring competitions, hackathons, 
                  workshops, and expert talks from industry professionals. Students from 
                  various institutions participate in this three-day event showcasing their 
                  innovative projects and technical skills.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Hackathon competitions with exciting prizes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Technical workshops on emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Project exhibition and demonstrations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ef1fb31c-c6ff-4754-9bd3-408b10550f0c.png" 
                  alt="Alumni Connect" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Alumni Connect</h3>
                  <p className="text-blue-200">February every year</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-100 mb-4">
                  A special event where our distinguished alumni from various companies and 
                  organizations return to share their experiences, insights, and guidance with 
                  current students. This event helps bridge the gap between academia and industry.
                </p>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Panel discussions on industry trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Career guidance sessions and mock interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Networking opportunities with successful alumni</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Calendar */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Academic Calendar 2023-24
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 border-b lg:border-b-0 lg:border-r border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Fall Semester</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Aug 1:</span>
                    <span className="text-blue-700">Fall semester begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Sep 15:</span>
                    <span className="text-blue-700">Tech Talk Series begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Oct 10-12:</span>
                    <span className="text-blue-700">TechFest 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Nov 5:</span>
                    <span className="text-blue-700">Industry Connect Workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Dec 15:</span>
                    <span className="text-blue-700">Fall semester ends</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border-b lg:border-b-0 lg:border-r border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Winter Break</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Dec 16:</span>
                    <span className="text-blue-700">Winter break begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Dec 20-25:</span>
                    <span className="text-blue-700">Winter coding challenge (online)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jan 1-5:</span>
                    <span className="text-blue-700">Industry internship workshop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jan 10:</span>
                    <span className="text-blue-700">Winter break ends</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 border-b md:border-b-0 md:border-r border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Spring Semester</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jan 11:</span>
                    <span className="text-blue-700">Spring semester begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Feb 15:</span>
                    <span className="text-blue-700">Alumni Connect 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Mar 10:</span>
                    <span className="text-blue-700">Research symposium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Apr 20:</span>
                    <span className="text-blue-700">Project exhibition day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">May 15:</span>
                    <span className="text-blue-700">Spring semester ends</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Summer Break</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">May 16:</span>
                    <span className="text-blue-700">Summer break begins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jun 1-15:</span>
                    <span className="text-blue-700">Summer internship program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jul 1-15:</span>
                    <span className="text-blue-700">Summer coding bootcamp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-semibold">Jul 31:</span>
                    <span className="text-blue-700">Summer break ends</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
