"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center w-full px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-4">About Me</h2>
        <div className="border-b-4 border-teal-400 w-16 mx-auto mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left text-gray-200 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              I'm a passionate Computer Science student at <span className="text-teal-400 font-semibold">Siddaganga Institute of Technology</span>, 
              currently pursuing my B.E. in Computer Science and Engineering with a CGPA of 8.76.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              As a Full Stack Developer, I'm skilled in <span className="text-teal-400">JavaScript, React.js, Next.js, Node.js, MongoDB, and Express.js</span>.
              I'm passionate about blockchain technology and building scalable applications that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Beyond coding, I have a creative side - I write poetry in Kannada and love experimenting with different cuisines. 
              I'm also an avid reader who enjoys books that broaden my perspective on life and technology.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I believe in pushing beyond limits, embracing challenges, and growing through struggle. 
              No shortcuts - just discipline, passion, and persistence. 
              <span className="text-teal-400 font-bold"> Stay Hard.</span>
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-teal-400 mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Blockchain", "Web Development", "Poetry", "Cooking", "Reading", "Problem Solving"].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
