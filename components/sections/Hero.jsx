"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticleAnimation from "../ui/ParticleAnimation";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 dark:bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Particle Animation */}
      <ParticleAnimation />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-lg shadow-teal-500/50 dark:shadow-teal-400/50 z-10"
      >
        <Image src="/profile.jpg" alt="D S Channappa" fill className="object-cover" />
      </motion.div>

      {/* Name and Title */}
      <motion.h1 
        className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold relative z-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Hello, I'm{" "}
        <span className="text-teal-500 dark:text-teal-400 hover:text-purple-500 dark:hover:text-purple-400 transition">
          D S Channappa
        </span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.p 
        className="mt-4 text-base sm:text-lg md:text-2xl text-gray-600 dark:text-gray-300 relative z-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        <TypeAnimation
          sequence={[
            "Full-Stack Developer", 2000,
            "Problem Solver", 2000,
            "Blockchain Developer", 2000,
            "Computer Science Student", 2000
          ]}
          speed={50} 
          repeat={Infinity}
        />
      </motion.p>

      {/* Social Links */}
      <motion.div 
        className="mt-6 flex gap-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <a
          href="https://www.linkedin.com/in/d-s-channappa-848307277/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-blue-400 rounded-full hover:bg-gray-700 transition shadow-lg"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/channrama"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition shadow-lg"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://leetcode.com/u/channa_rama/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-800 text-yellow-400 rounded-full hover:bg-gray-700 transition shadow-lg"
        >
          <SiLeetcode className="w-6 h-6" />
        </a>
      </motion.div>

      {/* CTA Button */}
      <motion.div 
        className="mt-6 flex flex-col sm:flex-row gap-4 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a
          href="/D_S_Channappa_Resume.pdf"
          download="D_S_Channappa_Resume.pdf"
          className="px-6 py-3 bg-teal-500 text-white rounded-lg flex items-center gap-2 hover:bg-teal-600 transition shadow-lg shadow-teal-500/50"
        >
          Download Resume <ArrowDownTrayIcon className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}
