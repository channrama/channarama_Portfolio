

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "AgriConnector",
    tech: "React.js, Node.js, Express.js, MongoDB, Solidity",
    description: "A blockchain-based marketplace ensuring secure trade between farmers and contractors. Features include smart contracts for escrow payments and digital agreements.",
    link: "https://github.com/channrama/SIH-2024",
  },
  {
    title: "Supply Chain Management",
    tech: "Next.js, TailwindCSS, Solidity, MongoDB, Hardhat",
    description: "A dual blockchain-powered system with a private blockchain for supplier data and a public one for customer tracking, featuring automated order processing and real-time tracking.",
    link: "https://github.com/channrama/supply_chain-codered25",
  },
  {
    title: "Blind Navigator",
    tech: "React Native, YOLOv5, TensorFlow, Flask, Twilio",
    description: "An AI-powered navigation app for visually impaired users, using YOLOv5 for real-time object detection and TensorFlow Lite for efficient processing.",
    link: "https://github.com/channrama/Blind",
  },
];

export default function Projects() {
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
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center w-full px-6 text-gray-300">
      <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4">Projects</h2>
      <div className="border-b-4 border-teal-400 w-16 mb-6"></div>

      {/* Grid Layout for Large Screens - 3 cards per row */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full h-full flex flex-col justify-between min-h-[250px]">
            <h3 className="text-2xl font-semibold text-teal-400">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{project.tech}</p>
            <p className="text-lg leading-relaxed flex-grow">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-teal-400 hover:underline">
              GitHub ↗
            </a>
          </div>
        ))}
      </div>

      {/* Slider for Mobile Screens */}
      <div className="md:hidden w-full flex justify-center">
        <Slider {...settings} className="w-full max-w-xs"> {/* Set max width for mobile */}
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 rounded-lg shadow-lg  w-[100%] mx-auto flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-teal-400">{project.title}</h3>
              <p className="text-gray-400 text-xs mb-1">{project.tech}</p>
              <p className="text-sm leading-relaxed  text-left">{project.description}</p> {/* Truncate long text */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-teal-400 hover:underline">
                GitHub ↗
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
