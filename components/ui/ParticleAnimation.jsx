"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ParticleAnimation() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  // Don't render anything until particles are generated on client
  if (particles.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-teal-400 dark:bg-teal-300 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-teal-400 dark:border-teal-300 opacity-30"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400 dark:bg-purple-300 rounded-full opacity-30"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-4 h-8 bg-pink-400 dark:bg-pink-300 opacity-30"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
