import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Photo Section */}
        <div className="w-48 h-48 relative mb-8 md:mb-0">
          <Image
            src="/profile.jpg" // Your photo path
            alt="Profile"
            layout="fill"
            className="rounded-full"
          />
        </div>

        {/* Bio Section */}
        <div className="md:ml-8">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I'm a passionate developer with expertise in JavaScript, React, and
            Node.js. I love building scalable and user-friendly applications.
          </p>
        </div>
      </div>
    </section>
  );
}