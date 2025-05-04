
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = "About - Department of Computer Engineering";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
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
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Our Department</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Fostering innovation and excellence in Computer Engineering education and research
            </p>
          </div>
        </div>
      </section>
      
      {/* HOD Message Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Message from HOD
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/067e8b5f-149a-4441-8a32-9831f90db6a6.png" 
                  alt="Dr. Chethan L S" 
                  className="w-full object-cover rounded-lg"
                />
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-bold text-xl text-blue-900 mb-1">Dr. Chethan L S</h3>
                <p className="text-blue-700">Associate Professor & HOD</p>
                <p className="text-blue-600 mt-2">Ph.D in Computer Engineering</p>
                <p className="text-blue-600">11 years of academic experience</p>
                <a href="mailto:chethan.ls@pestrust.edu.in" className="text-blue-500 hover:text-blue-700 mt-2 block hover:underline">
                  chethan.ls@pestrust.edu.in
                </a>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Dear Students and Visitors,</h3>
              
              <div className="space-y-4 text-blue-800">
                <p>
                  Welcome to the Department of Computer Engineering at PES University. It is my privilege to lead this dynamic department that is at the forefront of computing education and research.
                </p>
                <p>
                  Our department focuses on developing well-rounded computer engineers who possess both technical expertise and professional soft skills. We pride ourselves on our innovative curriculum, state-of-the-art laboratories, and dedicated faculty who bring extensive industry and research experience to the classroom.
                </p>
                <p>
                  Computer Engineering is a rapidly evolving field, and our department stays ahead of the curve by continuously updating our programs to reflect the latest technological advancements and industry needs. Our close ties with industry partners ensure that our students are well-prepared for the demands of the professional world.
                </p>
                <p>
                  I encourage you to explore our website to learn more about our academic programs, research activities, and the various opportunities available to our students. Whether you're a prospective student, a current member of our community, or an industry partner, we welcome your interest in our department.
                </p>
                <p className="font-semibold">
                  We are committed to excellence in education, research, and service to society through technological innovation.
                </p>
              </div>
              
              <div className="mt-6">
                <p className="font-semibold text-blue-900">Best regards,</p>
                <p className="text-blue-900">Dr. Chethan L S</p>
                <p className="text-blue-700">Head of Department</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision, Mission, Motto Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center pb-3 border-b border-white/20">Vision</h3>
              <p className="text-blue-100">
                To be recognized globally as a center of excellence for Computer Engineering education and research, producing innovative engineers who contribute significantly to technological advancement and societal well-being.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center pb-3 border-b border-white/20">Mission</h3>
              <ul className="text-blue-100 space-y-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 font-bold">•</span> 
                  <span>Provide high-quality education in computer engineering with a balanced approach to theory and practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 font-bold">•</span> 
                  <span>Conduct cutting-edge research that addresses real-world challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 font-bold">•</span> 
                  <span>Foster innovation, entrepreneurship, and professional ethics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-300 font-bold">•</span> 
                  <span>Collaborate with industry and academic partners globally</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-center pb-3 border-b border-white/20">Motto</h3>
              <div className="text-center">
                <div className="font-serif text-3xl italic text-blue-100 mb-4">
                  "Engineering Tomorrow's Technology Today"
                </div>
                <p className="text-blue-200">
                  We strive to empower our students with the knowledge, skills, and values necessary to lead technological innovation and address the computing challenges of our rapidly evolving world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department History */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Department History
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-3 rounded-lg"></div>
                <img 
                  src="/lovable-uploads/2f2a9743-5ebd-4e58-809b-91bee5332ce4.png" 
                  alt="Department Group Photo" 
                  className="relative z-10 rounded-lg w-full"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-blue-800">
              <p>
                The Department of Computer Engineering was established in 2012 with a vision to provide quality education in the field of computer engineering. Starting with just 3 faculty members and 60 students, the department has grown significantly over the years.
              </p>
              <p>
                In 2015, the department introduced its first postgraduate program, expanding its academic offerings to cater to the growing demand for specialized knowledge in computer engineering.
              </p>
              <p>
                The department has consistently focused on maintaining a balance between theoretical knowledge and practical skills. Our state-of-the-art laboratories equipped with the latest hardware and software resources provide students with hands-on experience in various domains of computer engineering.
              </p>
              <p>
                Today, the Department of Computer Engineering is one of the most sought-after departments in the university, known for its academic excellence, research contributions, and industry collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Strengths */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-blue-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:rounded-full">
            Our Strengths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Experienced Faculty</h3>
              <p className="text-blue-700">
                Our faculty members bring extensive academic and industry experience, ensuring a rich learning experience for students.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Modern Infrastructure</h3>
              <p className="text-blue-700">
                State-of-the-art labs equipped with the latest technologies and tools to support hands-on learning and research.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Industry Partnerships</h3>
              <p className="text-blue-700">
                Strong collaborations with leading tech companies for internships, projects, and placement opportunities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Research Focus</h3>
              <p className="text-blue-700">
                Emphasis on research and innovation through projects, publications, and participation in conferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
