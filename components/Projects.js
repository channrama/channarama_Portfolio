export default function Projects() {
    const projects = [
      {
        title: "Project 1",
        description: "A cool project description.",
        image: "/project1.jpg",
        link: "#",
      },
      // Add more projects
    ];
  
    return (
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }