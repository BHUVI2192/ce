
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    document.title = "About - Department of Computer Engineering";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar />

      <section className="pt-28 pb-10 bg-gradient-to-br from-blue-800 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About the Department</h1>
        </div>
      </section>

      {/* Department History / Logo */}
      <section className="relative py-14">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
            <img
              src="/lovable-uploads/2f288a17-4fcc-4470-8dd2-617bf46152fb.png"
              alt="Department Logo"
              className="h-40 w-40 object-contain drop-shadow-xl bg-white rounded-2xl p-4"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Department History</h2>
            <p className="text-blue-800 text-lg">
              Established with a vision to foster innovation and excellence in Computer Engineering, our department offers a unique blend of technical depth and creative problem-solving.<br />
              We have consistently set benchmarks in research, industry collaboration, and student development.
            </p>
          </div>
        </div>
      </section>

      {/* HOD Message */}
      <section className="py-14 bg-gradient-to-br from-blue-100 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 flex justify-center">
            {/* Placeholder for HOD image */}
            <div className="h-40 w-40 rounded-2xl bg-white border-2 border-blue-300 flex items-center justify-center overflow-hidden shadow">
              {/* User will upload HOD image later */}
              <span className="text-blue-400 text-xl font-bold opacity-50">HOD Photo</span>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-blue-900">Head of Department’s Message</h3>
            <p className="text-blue-800">
              Welcome to the Department of Computer Engineering! Guided by a commitment to academic excellence, industry relevance, and holistic growth, we empower our students to become innovative engineers equipped for the fast-evolving technological landscape.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-white/80 drop-shadow">
              <div className="font-semibold text-blue-900">Dr. Chethan L S</div>
              <div className="text-blue-700">Associate Professor & HOD</div>
              <div className="text-blue-600 text-sm">Email: chethan.ls@pestrust.edu.in</div>
            </div>
          </div>
        </div>
      </section>

      {/* Moto and Mission */}
      <section className="py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-blue-200/60 p-8 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Our Motto</h4>
            <p className="text-blue-800">
              "Innovating for a smarter tomorrow"
            </p>
          </div>
          <div className="bg-purple-200/80 p-8 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-purple-900 mb-2">Our Mission</h4>
            <ul className="text-purple-800 list-disc pl-6">
              <li>To provide high-quality education blending theory and real-world practice</li>
              <li>To foster research and innovation among faculty and students</li>
              <li>To nurture collaboration with industry and academia</li>
              <li>To empower graduates to be leaders in a dynamic tech landscape</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
