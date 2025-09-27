"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParticleAnimation from "../ui/ParticleAnimation";
import { useState, useEffect } from "react";

// Gita Shloka Component
const GitaShloka = ({ onComplete }) => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const shloka = {
    hindi: [
      "कर्म करो, पार्थ,",
      "जया-अपजया की चिंता छोड़ो,",
      "बस अपना कर्तव्य निभाओ,",
      "विश्वास रखो,",
      "फल स्वयं ही प्राप्त होगा।"
    ]
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Initial delay before starting the animation
    const startDelay = setTimeout(() => {
      setHasStarted(true);
    }, 500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isVisible || !hasStarted) return;

    const timers = [
      setTimeout(() => setCurrentStage(1), 800),
      setTimeout(() => setCurrentStage(2), 2000),
      setTimeout(() => setCurrentStage(3), 3200),
      setTimeout(() => setCurrentStage(4), 4400),
      setTimeout(() => setCurrentStage(5), 5600),
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 1000);
      }, 9000)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete, isVisible, hasStarted]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Krishna Arjuna Background Image */}

{/* Krishna–Arjuna background */}
<div
  className="absolute inset-0 bg-no-repeat opacity-70"
  style={{
    backgroundImage: 'url(/krishna-arjuna.png)',
    backgroundSize: 'cover',          // Always fills screen
    backgroundPosition: 'center',      // Default for larger screens
  }}
>
  {/* Mobile override */}
  <div className="block sm:hidden absolute inset-0" 
       style={{ backgroundPosition: '-80px center', backgroundImage: 'url(/krishna-arjuna.png)', backgroundSize: 'cover' }} 
  />
</div>


  {/* Overlays (cover entire screen) */}




      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-40 sm:h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Chapter Reference */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: hasStarted ? 1 : 0, y: hasStarted ? 0 : -30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 sm:mb-12"
        >
<h4
  className="text-xl sm:text-xl md:text-xl lg:text-xl text-white font-extrabold tracking-wide px-2"
  style={{
    textShadow: '2px 2px 15px rgba(27, 255, 232, 0.8), 0 0 30px rgba(171, 255, 242, 0.6)'
  }}
>
  Believe Krishna
</h4>




          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-2 sm:mt-4"></div>
        </motion.div>

        {/* Hindi Shloka - All 5 lines with proper staging */}
        <div className="space-y-3 sm:space-y-6 px-2 max-w-full">
          {shloka.hindi.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={currentStage > index && hasStarted ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="overflow-hidden w-full"
            >
              <h1 
                className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed tracking-wide hover:text-teal-400 transition-colors duration-500 break-words px-2"
                style={{
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  hyphens: 'auto'
                }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full opacity-40 ${
                  i % 3 === 0 ? 'bg-teal-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
                }`}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Main Hero Component with Integrated Gita Shloka
export default function Hero() {
  const [showGita, setShowGita] = useState(true);

  const handleGitaComplete = () => {
    console.log("Gita shloka completed, transitioning to hero...");
    setShowGita(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showGita && (
          <GitaShloka key="gita-shloka" onComplete={handleGitaComplete} />
        )}
      </AnimatePresence>

      <motion.section
        key="hero-section"
        id="/"
        className="h-screen flex flex-col items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showGita ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-40 h-40 sm:w-80 sm:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Particle Animation */}
        <ParticleAnimation />

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showGita ? 0 : 1, scale: showGita ? 0.8 : 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 sm:border-4 border-teal-400 shadow-lg shadow-teal-400/50 z-10"
        >
          <Image src="/profile.jpg" alt="D S Channappa" fill className="object-cover" />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-center relative z-10 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: showGita ? 0 : 1, y: showGita ? -20 : 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Hello, I'm{" "}
          <span className="text-teal-400 hover:text-purple-400 transition">
            Channarama
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 text-center relative z-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: showGita ? 0 : 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {!showGita && (
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
          )}
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className="mt-6 flex gap-3 sm:gap-4 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: showGita ? 0 : 1, scale: showGita ? 0.9 : 1 }} 
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/d-s-channappa-848307277/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-gray-800 text-blue-400 rounded-full hover:bg-gray-700 transition shadow-lg"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/channrama"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition shadow-lg"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://leetcode.com/u/channa_rama/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-gray-800 text-yellow-400 rounded-full hover:bg-gray-700 transition shadow-lg"
          >
            <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-6 flex flex-col sm:flex-row gap-4 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: showGita ? 0 : 1, scale: showGita ? 0.9 : 1 }} 
          transition={{ delay: 1.2, duration: 0.5 }}
        >
     
         
        </motion.div>
      </motion.section>
    </>
  );
}