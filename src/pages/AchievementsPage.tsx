import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Achievements from '@/components/Achievements';

const AchievementsPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Achievements - Department of Computer Engineering";
    
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Achievements</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Celebrating excellence in academics, research, and innovation
            </p>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
            Achievements
          </h2>
          {/* Hackathon Achievements only */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-700/50 p-3 rounded-full">
                {/* icon */}
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-100">Hackathon Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20 flex flex-col" key={i}>
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">{i}</div>
                  <h4 className="text-xl font-semibold text-blue-200 mb-2">Hackathon Event Title</h4>
                  <p className="text-blue-100 flex-1">Short description about the achievement and the event.</p>
                  {/* Placeholder for user image upload */}
                  <div className="mt-4 flex items-center justify-center h-40 bg-slate-200 rounded-lg">
                    <span className="text-slate-400 font-semibold">Upload Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Academic & Research Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-700/50 p-3 rounded-full">
                {/* icon */}
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-100">Academic & Research Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1,2].map(idx => (
                <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-700/20 flex flex-col" key={idx}>
                  <h4 className="text-xl font-semibold text-blue-200 mb-2">Achievement Title</h4>
                  <p className="text-blue-100 mb-4 flex-1">Description of academic or research achievement goes here.</p>
                  {/* Placeholder for user image upload */}
                  <div className="flex justify-center items-center h-40 bg-slate-200 rounded-lg">
                    <span className="text-slate-400 font-semibold">Upload Image</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Success Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {["Trupthi J", "Harini A", "Rudresh J"].map(name => (
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col" key={name}>
                {/* Placeholder for student image */}
                <div className="h-48 flex justify-center items-center bg-blue-50">
                  <span className="text-blue-300 font-semibold">Upload Image</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{name}</h3>
                  <p className="text-blue-600 mb-4">Class of 2027</p>
                  <p className="text-blue-700 mb-4 flex-1">Student achievement description to be specified.</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 italic">
                      "Student testimonial to be added."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Department Rankings & Recognition */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
            Rankings & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Only show last two cards, skip the "#3" rank card */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
              <div className="text-5xl font-bold text-blue-200 mb-4">A+</div>
              <p className="text-xl font-semibold text-blue-100 mb-2">
                Received A+ Grade for Research and Innovation
              </p>
              <p className="text-blue-300">
                By National Accreditation Council for Technical Education
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
              <div className="text-5xl font-bold text-blue-200 mb-4">95%</div>
              <p className="text-xl font-semibold text-blue-100 mb-2">
                Highest Placement Rate among Engineering Departments
              </p>
              <p className="text-blue-300">
                For five consecutive years (2019-2023)
              </p>
            </div>
          </div>
          <div className="mt-16 bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-blue-100 mb-6 text-center">
              Awards & Accolades
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700/30 rounded-full flex items-center justify-center text-2xl">🏆</div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-200">Innovation Excellence Award</h4>
                  <p className="text-blue-300">
                    Awarded by the National Association of Engineering Institutions for outstanding 
                    contributions to technological innovation, 2023.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700/30 rounded-full flex items-center justify-center text-2xl">📱</div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-200">Best Research Department</h4>
                  <p className="text-blue-300">
                    Recognized for outstanding research contributions in the field of IoT 
                    and embedded systems by the State Technical University Association, 2022.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700/30 rounded-full flex items-center justify-center text-2xl">🔬</div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-200">Industry-Academia Partnership Award</h4>
                  <p className="text-blue-300">
                    Awarded for exemplary collaboration with industry partners that resulted 
                    in significant technological advancements and student opportunities, 2023.
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

export default AchievementsPage;
