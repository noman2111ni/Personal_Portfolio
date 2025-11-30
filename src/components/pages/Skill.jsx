import React from "react";
import "./Skill.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const skills = [
  {
    name: "HTML5",
    description:
      "The standard markup language for creating web pages and web applications.",
    icon: <FaHtml5 className="skill-icon text-orange-500" />,
  },
  {
    name: "CSS3",
    description:
      "A style sheet language used for describing the presentation of a document.",
    icon: <FaCss3Alt className="skill-icon text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    icon: <RiTailwindCssFill className="skill-icon text-cyan-400" />,
  },
  {
    name: "JavaScript (ES6+)",
    description:
      "A versatile programming language for web development and scripting.",
    icon: <FaJsSquare className="skill-icon text-yellow-400" />,
  },
  {
    name: "React",
    description:
      "A JavaScript library for building user interfaces. Widely used and popular.",
    icon: <FaReact className="skill-icon text-blue-400" />,
  },
  {
    name: "Redux",
    description:
      "A predictable state management library for JavaScript apps.",
    icon: <SiRedux className="skill-icon text-purple-500" />,
  },
  {
    name: "Sass",
    description:
      "A CSS preprocessor that adds variables, mixins, and nesting to CSS.",
    icon: <FaSass className="skill-icon text-pink-500" />,
  },
];

const Skill = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {/* Back Button */}
      <IoArrowBack
        onClick={handleBack}
        className="absolute top-24 left-6 text-3xl text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors"
      />

      {/* Skills Section */}
      <div className="skills-container min-h-screen px-6 py-16 text-center pt-20">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
          My Skills
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Frontend development expertise with HTML, CSS, JavaScript (ES6+), React,
          TailwindCSS, Redux, and Sass. Skilled in creating responsive,
          accessible, and user-friendly interfaces with performance and
          scalability in mind.
        </p>

        {/* Grid */}
        <div className="skills-grid mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 hover:scale-105 transition-transform duration-300"
            >
              <div className="skill-icon-wrapper flex justify-center mb-4 text-5xl">
                {skill.icon}
              </div>
              <h2 className="skill-name text-xl font-semibold text-white mb-2">
                {skill.name}
              </h2>
              <p className="skill-description text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
