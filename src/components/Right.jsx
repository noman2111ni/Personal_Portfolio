import React from 'react'
import './Right.css'
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
const Right = () => {

    return (
        <>
            <div className="main">
                <div className="icon">
                    <div className="iconbox active" style={{ "--i": 1 }}>
                        <FaHtml5 className='icons  text-[#e34c26] text-[50px]' />
                    </div>
                    <div className="iconbox" style={{ "--i": 2 }}>
                        <FaCss3Alt className='icons text-[#264de4] text-[50px]' />
                    </div>
                    <div className="iconbox" style={{ "--i": 3 }}>
                        <RiJavascriptFill className='icons text-[#f7df1e] text-[50px]' />
                    </div>
                    <div className="iconbox" style={{ "--i": 4 }}>
                        <SiTailwindcss className='icons text-[#06b6d4] text-[50px]' />
                    </div>

                    <div className="iconbox" style={{ "--i": 5 }}>
                        <FaReact className='icons text-[#61dbfb] text-[50px]' />
                    </div>
                    <div className="iconbox" style={{ "--i": 6 }}>
                        <TbBrandRedux className='icons text-[#764abc] text-[50px]' />
                    </div>
                </div>
                <div className="content">
                    <div className="contentbx active" id='content1'>
                        <div className="card">
                            <div className="imgBx">
                                <img className='' src="/images/new_pic.jpg" alt="" />
                            </div>
                            <div className="contentBx">
                                <TypeAnimation
                                    sequence={[
                                        'Noman Shabeer',
                                        1000,
                                        'Web Developer',
                                        1000,
                                        'React Developer',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    style={{ fontSize: '1em', display: 'inline-block', marginTop: '10px', color: 'white' }}
                                    repeat={Infinity}
                                />
                            </div>
                            <div className="links flex gap-4 mt-4">
                                <a href="https://github.com/noman2111ni/" target="_blank"><FaGithub className='icons text-[white] text-[20px]' /></a>
                                <a href="https://www.linkedin.com/in/nomanshabeer/
" target="_blank"><FaLinkedinIn className='icons text-[#0a66c2] text-[20px]' /></a>
                                <a href="https://www.instagram.com/abhishek_kumar_0909/" target="_blank"><FaInstagram className='icons text-[#e1306c] text-[20px]' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Right