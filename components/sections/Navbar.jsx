"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
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
    <nav className={`fixed top-0 w-full flex justify-center space-x-6 p-4 transition-all duration-500 backdrop-blur-md z-40 bg-white/10 dark:bg-black/10 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <button onClick={() => scrollToSection("home")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        Home
      </button>
      <button onClick={() => scrollToSection("about")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        About
      </button>
      <button onClick={() => scrollToSection("skills")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        Skills
      </button>
      <button onClick={() => scrollToSection("projects")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        Projects
      </button>
      <button onClick={() => scrollToSection("experience")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        Experience
      </button>
      <button onClick={() => scrollToSection("contact")} className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition">
        Contact
      </button>
    </nav>
  );
}
