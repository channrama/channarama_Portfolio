import Image from "next/image";

export default function About() {
  return (
    <section className="h-screen flex justify-center items-center px-6 bg-black">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center text-center md:text-left">
        
        {/* Photo Section */}
        <div className="w-64 h-64 relative mb-6 md:mb-0 md:mr-10 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Bio Section */}
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          
          <p className="mt-4 text-lg text-gray-300">
            I'm a Full Stack Web Developer skilled in JavaScript, React.js ,Next.js and Node.js.  
            I push myself every day without any days off to become the best version of myself.
            I believe real growth comes from Hard work and struggle
            <b> Stay Hard.</b>
          </p>

          <p className="mt-4 text-lg text-gray-300">
          Beyond coding, I write poetry in Kannada and enjoy reading books that broaden my perspective.          </p>

          <p className="mt-4 text-lg text-gray-300">
            I’m also passionate about cooking and love experimenting with different cuisines.
          </p>
        </div>

      </div>
    </section>
  );
}
