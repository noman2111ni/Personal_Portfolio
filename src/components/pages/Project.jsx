import { ExternalLink, Github } from "lucide-react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    title: "Retail Management System",
    description:
      "A full-stack system with vendor, purchase, and inventory management. Built using Django & React.",
    tech: ["React", "Django", "PostgreSQL"],
    live: "https://retail-managment-system.vercel.app/",
    github: "#",
  },
  {
    title: "Certificate Generator",
    description:
      "Generates certificates dynamically with QR codes. Includes secure sharing features.",
    tech: ["Node.js", "Express", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "ecommerce Website",
    description:
      "An e-commerce website with user authentication, payment gateway integration, and admin panel.",
    tech: ["React", "TailwindCSS", "Django"],
    live: "https://yummart.pythonanywhere.com/",
    github: "#",
  },
];

const Project = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/")
  }
  return (
    <>
      <section className="min-h-screen  text-white px-6 md:px-12 py-10">
        <IoArrowBack onClick={handleBack} className=' arrow absolute top-11 left-9 text-[30px] text-white cursor-pointer hover:text-red-400' />

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my best work — showcasing web apps, full-stack
            systems, and UI experiments.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-sm bg-red-600/20 text-red-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-lg transition-all hover:bg-red-600 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
