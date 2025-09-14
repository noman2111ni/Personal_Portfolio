import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Left = () => {
    return (
        <div className='headingone container mx-auto  z-40'>
            {/* Typing Animation */}
            <TypeAnimation
                sequence={[
                    "Hi, I'm Noman Shabeer",
                    1500,
                    "A Passionate Full Stack Developer",
                    1500,
                    "Building Modern Web Applications",
                    1500,
                ]}
                wrapper="span"
                speed={17}
                className="block font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 
    bg-clip-text text-transparent  1font-semibold text-3xl md:text-2xl lg:text-5xl mt-4"
                repeat={Infinity}
            />

            {/* Heading */}
            <div
                className='heading flex flex-col md:flex-row flex-wrap md:gap-6 !text-[38px] md:text-6xl lg:text-6xl font-extrabold tracking-tight mt-8 gap-6'
            >
                <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
               bg-clip-text text-transparent font-extrabold">
  Web Experiences
</h1>

            </div>

            {/* Extra line about web development */}
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
                I specialize in creating responsive, fast, and scalable web applications using modern
                technologies like <span className="text-blue-400 font-semibold">React</span>,
                <span className="text-green-400 font-semibold"> Node.js</span>, and
                <span className="text-purple-400 font-semibold"> MongoDB</span>.
            </p>

        </div>
    )
}

export default Left
