import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Main from './Main';
const Header = () => {
    const [togle, setTogle] = useState(false)
    const handleClick = () => {
        setTogle(!togle)
    }
    return (
        <>
            <div className='w-full h-20 flex justify-between items-center px-6  top-0 '>
                <h1 className='text-white text-2xl md:text-3xl font-bold z-50'>
                    Noman <span className='span1 text-red-600 '>S</span>
                </h1>
                <div className='hidden md:flex gap-5 md:gap-6'>
                    <NavLink style={{ "--i": 4 }} data-text="Home"
                        to="/"
                        className="span  md:text-xl z-50 border-b-2 border-transparent hover:border-[white]/80  transition-all duration-800"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        style={{ "--i": 4 }} data-text="About"
                        to="/about"
                        className="span font-semibold md:text-xl z-50 border-b-2 border-transparent hover:border-[white]/80  transition-all duration-800"
                    >
                        About
                    </NavLink>

                    <NavLink
                        style={{ "--i": 4 }} data-text="Contact"
                        to="/contact"
                        className="span font-semibold md:text-xl z-50 border-b-2 border-transparent hover:border-[white]/80  transition-all duration-800"
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        style={{ "--i": 4 }} data-text="Skills"
                        to="/skills"
                        className="span font-semibold md:text-xl z-50 border-b-2 border-transparent hover:border-[white]/80  transition-all duration-800"
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        style={{ "--i": 4 }} data-text="Project"
                        to="/projects"
                        className="span font-semibold md:text-xl z-50 border-b-2 border-transparent hover:border-[white]/80  transition-all duration-800"
                    >
                        Project
                    </NavLink>

                </div>
                <div className='flex  md:hidden manget-target text-white gap-5'>
                    {
                        togle ? (
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </div>
            </div>
            {togle && (
                <div className='flex flex-col items-center text-white  text-[18px] md:hidden'>
                    <NavLink
                        to="/"
                        className="font-semibold  border-b-2 border-transparent 
                        w-full text-center py-3
                        transition-all duration-300 hover:bg-gray-500 "
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="font-semibold  
                        w-full text-center py-3
                        transition-all duration-300 hover:bg-gray-500 "
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="font-semibold  
                        w-full text-center py-3
                        transition-all duration-300 hover:bg-gray-500 "
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className="font-semibold  
                        w-full text-center py-3
                        transition-all duration-300 hover:bg-gray-500 "
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className="font-semibold  
                        w-full text-center py-3
                        transition-all duration-300 hover:bg-gray-500 "
                    >
                        Project
                    </NavLink>

                </div>
            )}
            <Main />

        </>
    )
}

export default Header