"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const initialProjects = [
  {
    title: "AgriConnector",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Solidity"],
    description:
      "A blockchain-based agricultural marketplace ensuring secure and transparent trade between farmers and contractors. Features include smart contracts for automated escrow payments, digital agreements, and a two-way trade system.",
    link: "https://github.com/channrama/SIH-2024",
    demo: null,
    image: "/projects/agriconnector.jpg",
    category: "Blockchain",
    features: [
      "Smart contract-based escrow payments",
      "Two-way trade system",
      "Digital agreement management",
      "Secure farmer-contractor marketplace",
    ],
  },
  {
    title: "Supply Chain Management",
    tech: ["Next.js", "TailwindCSS", "Solidity", "MongoDB", "Hardhat"],
    description:
      "A dual blockchain-powered supply chain system utilizing both private and public blockchains. Features automated order processing, real-time tracking, and tamper-proof data records.",
    link: "https://github.com/channrama/supply_chain-codered25",
    demo: null,
    image: "/projects/supply-chain.jpg",
    category: "Blockchain",
    features: [
      "Dual blockchain architecture",
      "Real-time order tracking",
      "Automated payment settlements",
      "Tamper-proof data records",
    ],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projects, setProjects] = useState(initialProjects);

  const settings = {
    dots: true,
    infinite: projects.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    pauseOnHover: true, // Desktop hover pause
    pauseOnFocus: true, // Desktop focus pause
    swipeToSlide: true, // Mobile touch interaction
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center w-full px-4 sm:px-6 py-16 sm:py-20"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4">
          Projects
        </h2>
        <div className="border-b-4 border-teal-400 w-16 mx-auto mb-8"></div>

        {/* Desktop Grid - Fixed layout for 2 projects */}
        <div className="hidden md:flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 w-full h-full flex flex-col justify-between border border-gray-700 hover:border-teal-400 group overflow-hidden"
              >
                {/* Project Category Banner */}
                <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {project.category}
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium text-sm"
                  >
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium text-sm"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden w-full px-2">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.title} className="px-2">
                <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg shadow-lg border border-gray-700 mx-auto max-w-sm overflow-hidden">
                  <div className="w-full h-36 bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white flex-1 pr-2">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-teal-900/30 text-teal-300 rounded-full text-xs font-medium whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-400 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-gray-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm font-medium"
                    >
                      GitHub ↗
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-medium"
                      >
                        Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}