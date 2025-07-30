"use client";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import ThemeToggle from "./ui/ThemeToggle";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-black dark:text-white overflow-hidden transition-colors duration-300">
      <ThemeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}