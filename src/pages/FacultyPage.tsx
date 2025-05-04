
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Award, BookOpen, Clock } from "lucide-react";

const facultyMembers = [
  {
    name: "Dr. Chethan L S",
    title: "Associate Professor & HOD",
    image: "/lovable-uploads/067e8b5f-149a-4441-8a32-9831f90db6a6.png",
    email: "chethan.ls@pestrust.edu.in",
    education: "Ph.D",
    experience: "11 years",
    specialization: "Machine Learning & AI",
    bio: "Dr. Chethan L S is the Head of the Computer Engineering Department with expertise in machine learning and artificial intelligence. He has published numerous research papers in prestigious journals and has led several funded research projects."
  },
  {
    name: "Mrs. Yojana Yadav",
    title: "Associate Professor",
    image: "/lovable-uploads/14f1f6d4-a8d4-46c5-8cd0-ae6afa3bb3e8.png",
    email: "yojanayadav@pestrust.edu.in",
    education: "M.Tech (Ph.D)",
    experience: "18 years",
    specialization: "Computer Networks & Security",
    bio: "Mrs. Yojana Yadav is an Associate Professor with extensive experience in the field of computer networks and security. She is currently pursuing her Ph.D. and has guided numerous student projects in her area of expertise."
  },
  {
    name: "Mrs. Arpitha J C",
    title: "Associate Professor",
    image: "/lovable-uploads/ec0403a2-b064-4d70-bf9e-3af19623574d.png",
    email: "admin@admin.com",
    education: "M.Tech",
    experience: "7 years",
    specialization: "Software Engineering & Database Systems",
    bio: "Mrs. Arpitha J C specializes in software engineering and database systems. With 7 years of academic experience, she has been instrumental in developing the practical curriculum components for the department's software engineering courses."
  }
];

const FacultyPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Faculty - Department of Computer Engineering";
    
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Meet our dedicated team of educators and researchers shaping the future of computer engineering
            </p>
          </div>
        </div>
      </section>
      
      {/* Faculty Listing */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Teaching Staff
          </h2>
          
          <div className="space-y-16">
            {facultyMembers.map((faculty, index) => (
              <div key={faculty.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 border-r border-blue-100">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg shadow-xl w-48 h-48">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mt-6 mb-2 text-center">{faculty.name}</h3>
                    <p className="text-blue-700 mb-4 text-center">{faculty.title}</p>
                    
                    <a 
                      href={`mailto:${faculty.email}`} 
                      className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-colors"
                    >
                      <Mail size={16} />
                      <span>{faculty.email}</span>
                    </a>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4">Biography</h4>
                      <p className="text-blue-800 leading-relaxed">{faculty.bio}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Award size={20} className="text-blue-700" />
                          <h5 className="font-semibold text-blue-900">Education</h5>
                        </div>
                        <p className="text-blue-800 pl-8">{faculty.education}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock size={20} className="text-blue-700" />
                          <h5 className="font-semibold text-blue-900">Experience</h5>
                        </div>
                        <p className="text-blue-800 pl-8">{faculty.experience}</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3 mb-2">
                          <BookOpen size={20} className="text-blue-700" />
                          <h5 className="font-semibold text-blue-900">Specialization</h5>
                        </div>
                        <p className="text-blue-800 pl-8">{faculty.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented educators and researchers to join our department.
            If you're passionate about computer engineering and teaching, we'd love to hear from you.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-blue-100 transition-colors"
          >
            View Current Openings
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FacultyPage;
