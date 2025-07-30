
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "AgriConnector",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Solidity"],
    description: "A blockchain-based agricultural marketplace ensuring secure and transparent trade between farmers and contractors. Features include smart contracts for automated escrow payments, digital agreements, and a two-way trade system.",
    link: "https://github.com/channrama/SIH-2024",
    demo: null,
    image: "/projects/agriconnector.jpg",
    category: "Blockchain",
    features: [
      "Smart contract-based escrow payments",
      "Two-way trade system",
      "Digital agreement management",
      "Secure farmer-contractor marketplace"
    ]
  },
  {
    title: "Supply Chain Management",
    tech: ["Next.js", "TailwindCSS", "Solidity", "MongoDB", "Hardhat"],
    description: "A dual blockchain-powered supply chain system utilizing both private and public blockchains. Features automated order processing, real-time tracking, and tamper-proof data records.",
    link: "https://github.com/channrama/supply_chain-codered25",
    demo: null,
    image: "/projects/supply-chain.jpg",
    category: "Blockchain",
    features: [
      "Dual blockchain architecture",
      "Real-time order tracking",
      "Automated payment settlements",
      "Tamper-proof data records"
    ]
  },
  {
    title: "Blind Navigator",
    tech: ["React Native", "Computer Vision", "Flask", "Twilio", "Mobile Development"],
    description: "A navigation application designed for visually impaired individuals. Features real-time object detection, audio navigation cues, and emergency assistance functionality.",
    link: "https://github.com/channrama/Blind",
    demo: null,
    image: "/projects/blind-navigator.jpg",
    category: "Mobile App",
    features: [
      "Real-time object detection",
      "Audio navigation cues",
      "SOS emergency feature",
      "Cross-platform mobile support"
    ]
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center w-full px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4">Projects</h2>
        <div className="border-b-4 border-teal-400 w-16 mx-auto mb-8"></div>

        {/* Grid Layout for Large Screens */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 w-full h-full flex flex-col justify-between min-h-[400px] border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 group"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{project.category}</span>
              </div>

              <div className="flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">{project.title}</h3>
                  <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="w-1 h-1 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 bg-teal-500 dark:bg-teal-600 text-white rounded-lg hover:bg-teal-600 dark:hover:bg-teal-700 transition font-medium text-sm"
                >
                  GitHub ↗
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-purple-500 dark:bg-purple-600 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition font-medium text-sm"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Slider for Mobile Screens */}
        <div className="md:hidden w-full flex justify-center">
          <Slider {...settings} className="w-full max-w-sm">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg mx-auto border border-gray-200 dark:border-gray-700">
                {/* Project Image Placeholder */}
                <div className="w-full h-32 bg-gradient-to-br from-teal-400 to-purple-500 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{project.category}</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-teal-500 dark:bg-teal-600 text-white rounded-lg hover:bg-teal-600 dark:hover:bg-teal-700 transition text-sm font-medium"
                  >
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-purple-500 dark:bg-purple-600 text-white rounded-lg hover:bg-purple-600 dark:hover:bg-purple-700 transition text-sm font-medium"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
}
