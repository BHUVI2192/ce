
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
      <Achievements />
      
      {/* Student Success Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Student Success Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/beff8104-287b-49dc-953c-46c3afcee135.png" 
                  alt="Student group" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Ananya Sharma</h3>
                <p className="text-blue-600 mb-4">Class of 2023</p>
                <p className="text-blue-700 mb-4">
                  Ananya led a team that developed an AI-powered sign language translator, 
                  which won the national innovation award. She is now working as a machine 
                  learning engineer at Google.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 italic">
                    "The practical approach to learning at the Computer Engineering department 
                    prepared me well for my career in AI and machine learning."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/d3fbaa3e-edef-438a-8fb9-6ff99ad2021d.png" 
                  alt="Student project" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Rahul Mehta</h3>
                <p className="text-blue-600 mb-4">Class of 2022</p>
                <p className="text-blue-700 mb-4">
                  Rahul's research on secure IoT protocols was published in a prestigious 
                  international journal. After graduation, he founded his own cybersecurity 
                  startup that has received significant venture funding.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 italic">
                    "The mentorship and research opportunities provided by the department 
                    were instrumental in helping me turn my ideas into a successful business."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/cc140892-4ce5-4367-8259-78011b72f410.png" 
                  alt="Student presentation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Priya Nair</h3>
                <p className="text-blue-600 mb-4">Class of 2021</p>
                <p className="text-blue-700 mb-4">
                  Priya's final year project on blockchain-based healthcare records management 
                  received national recognition. She is currently pursuing her Ph.D. in 
                  distributed systems at MIT.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 italic">
                    "The challenging curriculum and hands-on projects at the department built 
                    a strong foundation for my academic pursuits in cutting-edge research."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Rankings & Recognition */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-400 after:rounded-full">
            Rankings & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
              <div className="text-5xl font-bold text-blue-200 mb-4">#3</div>
              <p className="text-xl font-semibold text-blue-100 mb-2">
                Ranked 3rd among Computer Engineering departments in India
              </p>
              <p className="text-blue-300">
                By National Engineering Education Rankings 2023
              </p>
            </div>
            
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
