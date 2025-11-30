import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>

      <section id="about" className="relative pt-17">
        <IoArrowBack
          onClick={handleBack}
          className='absolute top-24 left-2 text-2xl text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors'
        />
        <div className='flex flex-col items-center justify-center min-h-screen px-4 py-18 md:py-16 '>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
            {/* Profile */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto md:mx-0 overflow-hidden ring-4 ring-yellow-400/40 shadow-xl">
                <img
                  src="/images/pic.png"
                  alt="Noman"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
                About Me
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Hi! I'm{" "}
                <span className="text-yellow-400 font-semibold">Noman</span>, a{" "}
                <span className="text-orange-400 font-semibold">Frontend Developer</span>{" "}
                with a passion for building{" "}
                <span className="text-green-400 font-semibold">beautiful</span>,{" "}
                <span className="text-blue-400 font-semibold">functional</span>, and{" "}
                <span className="text-pink-400 font-semibold">user-centric</span> websites.
                I specialize in{" "}
                <span className="text-indigo-400 font-semibold">React</span>,{" "}
                <span className="text-cyan-400 font-semibold">Tailwind CSS</span>, and{" "}
                <span className="text-rose-400 font-semibold">modern JavaScript</span>.
              </p>

              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Clean, maintainable code
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✔</span> Fully responsive & accessible design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✔</span> Performance-focused web experiences
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">✔</span> Collaborates well with teams and designers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
