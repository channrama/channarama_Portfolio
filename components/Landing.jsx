"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";

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
        <button onClick={() => scrollToSection("about")} className="text-lg sm:text-xl text-gray-300 hover:text-teal-400 transition">About</button>
        <button onClick={() => scrollToSection("projects")} className="text-lg sm:text-xl text-gray-300 hover:text-teal-400 transition">Projects</button>
        <button onClick={() => scrollToSection("contact")} className="text-lg sm:text-xl text-gray-300 hover:text-teal-400 transition">Contact</button>
      </nav>

   

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg shadow-teal-500/50"
        >
          <Image src="/profile.jpg" alt="Channa Rama" fill className="object-cover" />
        </motion.div>

        <motion.h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold relative z-10"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Hello, I'm {" "}
          <span className="text-teal-400 hover:text-purple-400 transition">
            Channa Rama
          </span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.p className="mt-4 text-base sm:text-lg md:text-2xl text-gray-300 relative z-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          <TypeAnimation
            sequence={["Full-Stack Developer", 2000, "Problem Solver", 2000, "AI & Blockchain Explorer", 2000]}
            speed={50} repeat={Infinity}
          />
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="mt-6 flex flex-col sm:flex-row gap-4 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <a
            href="/channarama_Resume.pdf"
            download="Channa_Rama_Resume.pdf"
            className="px-6 py-3 bg-teal-500 text-white rounded-lg flex items-center gap-2 hover:bg-teal-600 transition shadow-lg shadow-teal-500/50"
          >
            Download Resume <ArrowDownTrayIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* Sections */}
      <section id="about" className="h-screen flex items-center justify-center text-gray-300 text-2xl md:text-3xl">About Section</section>
      <section id="projects" className="h-screen flex items-center justify-center text-gray-300 text-2xl md:text-3xl">Projects Section</section>
      <section id="contact" className="h-screen flex items-center justify-center text-gray-300 text-2xl md:text-3xl">Contact Section</section>
    </main>
  );
}
