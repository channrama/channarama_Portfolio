"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "B.E. in Computer Science and Engineering",
    institution: "Siddaganga Institute of Technology",
    period: "2022 - Present",
    grade: "CGPA: 8.76",
    description: "Currently pursuing Bachelor's degree in Computer Science and Engineering. Focusing on full-stack development and blockchain technology. Active participant in hackathons and coding competitions.",
    icon: AcademicCapIcon,
    type: "education",
    achievements: [
      "Maintained consistent academic performance with 8.76 CGPA",
      "Participated in SIH Internal Hackathon - AgriConnector Project",
      "Developed multiple full-stack projects using MERN stack",
      "Active in coding competitions and technical events"
    ]
  },
  {
    title: "Pre-University Education",
    institution: "The Master's PU College Tumkur",
    period: "2020 - 2022",
    grade: "Grade: 93.50%",
    description: "Completed Pre-University education with distinction in Science stream. Developed strong foundation in Mathematics, Physics, and Chemistry which later helped in programming and logical thinking.",
    icon: AcademicCapIcon,
    type: "education",
    achievements: [
      "Achieved 93.50% in PUC examinations",
      "Science stream with focus on Mathematics and Physics",
      "Developed analytical and problem-solving skills",
      "Participated in various academic competitions"
    ]
  },
  {
    title: "High School Education",
    institution: "Vivekananda Vidya Mandira",
    period: "2020",
    grade: "Grade: 92.64%",
    description: "Completed high school education with excellent academic performance. This period laid the foundation for my interest in technology and problem-solving.",
    icon: BookOpenIcon,
    type: "education",
    achievements: [
      "Secured 92.64% in SSLC examinations",
      "Consistent academic excellence throughout school",
      "Developed interest in mathematics and logical reasoning",
      "Active participation in school technical events"
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center w-full px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-500 dark:text-teal-400 mb-4">Education & Experience</h2>
        <div className="border-b-4 border-teal-500 dark:border-teal-400 w-16 mx-auto mb-12"></div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-400 to-purple-400"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-teal-500 dark:bg-teal-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-16 md:pl-0' : 'md:pl-8 pl-16 md:pr-0'}`}>
                    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                          <IconComponent className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
                          <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">{exp.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                        <span className="text-sm font-medium text-teal-600 dark:text-teal-400">{exp.grade}</span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-white">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-teal-500 dark:bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
