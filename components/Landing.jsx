"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white text-center px-6 overflow-hidden">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full flex justify-center space-x-6 p-4 transition-opacity duration-500 backdrop-blur-md ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <button onClick={() => scrollToSection("home")} className="text-lg sm:text-xl text-gray-400 hover:text-teal-400 transition">Home</button>
        <button onClick={() => scrollToSection("about")} className="text-lg sm:text-xl text-gray-400 hover:text-teal-400 transition">About</button>
        <button onClick={() => scrollToSection("projects")} className="text-lg sm:text-xl text-gray-400 hover:text-teal-400 transition">Projects</button>
        <button onClick={() => scrollToSection("contact")} className="text-lg sm:text-xl text-gray-400 hover:text-teal-400 transition">Contact</button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col items-center justify-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-teal-400 shadow-lg">
          <Image src="/profile.jpg" alt="Channa Rama" fill className="object-cover" />
        </div>

        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold">
          Hello, I'm <span className="text-teal-400">Channa Rama</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-300">
          Full-Stack Developer | Problem Solver | AI & Blockchain Explorer
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="/channarama_Resume.pdf"
            download="Channa_Rama_Resume.pdf"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg flex items-center gap-2 hover:bg-teal-600 transition shadow-lg"
          >
            Download Resume <ArrowDownTrayIcon className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
              {/* About Section */}
      <section id="about" className="h-screen flex flex-col justify-center items-center w-full px-6">
        <div className="max-w-4xl text-center text-gray-200">
          <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mt-[-40px]">About Me</h2>
          <div className="mt-4 border-b-4 border-teal-400 w-20 mx-auto"></div>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed">
            A relentless coder, a poet at heart, and a master of flavors in the kitchen. When I'm not busy solving complex problems in JavaScript, React.js, and Next.js,  
            I am weaving verses in Kannada, capturing emotions in words.
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            My philosophy is simple—push beyond limits, embrace the struggle, and grow through challenges.  
            No shortcuts, no easy paths—just pure grind and passion. <b className="text-teal-400">Stay Hard.</b>
          </p>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed">
            Whether it's optimizing an algorithm, writing poetry, or experimenting with a new dish,  
            I bring the same energy and discipline to everything I do.  
            Life is a mix of logic and art, and I thrive in both worlds.
          </p>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="h-screen flex items-center justify-center text-gray-200 text-2xl md:text-3xl">Projects Section</section>
      
      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center text-gray-200 text-2xl md:text-3xl">Contact Section</section>
    </main>
  );
}