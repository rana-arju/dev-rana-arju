import React from 'react';
import '../App.css';
import Boy from '../images/boy.png';
import Crown from '../images/crown.png';
import Github from '../images/github.png';
import GlassesImoji from '../images/glassesimoji.png';
import Facebook from '../images/instagram.png';
import Linkedin from '../images/linkedin.png';
import ThumbUp from '../images/thumbup.png';
import Vector1 from '../images/Vector1.png';
import Vector2 from '../images/Vector2.png';
import FloatingDiv from './FloatingDiv';
const Hero = () => {
    return (
        <div>
            <div className="hero h-[400px] md:h-[550px] ">
            <div className="hero-content flex-col lg:flex-row-reverse items-start">
                <div className='md:w-1/2 hero-right'>
                   <img src={Vector1} alt="" />
                   <img src={Vector2} alt="" />
                   <img src={Boy} alt="" />
                   <img src={GlassesImoji} alt="" />
                   <div style={{top:' -6%', left:'50%'}} className="hidden md:block">
                       <FloatingDiv img={Crown} text1="Web" text2="Developer" />
                   </div>
                   <div style={{top:' 20rem', left:'-5rem'}} className="hidden md:block">
                       <FloatingDiv img={ThumbUp} text1="Best Design" text2="Award" />
                   </div>
                   

                    <div className="blur" style={{ background: "rgb(238 210 255)" }}>

                    </div>
                            <div
                            className="blur"
                            style={{
                                background: "#C1F5FF",
                                top: "17rem",
                                width: "21rem",
                                height: "11rem",
                                left: "-9rem",
                            }}
                            ></div>

                </div>
                
                <div className='md:w-1/2 hero-left'>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Hy! I'm <br /><span className='cl-title'>Rana Arju</span> </h1>
                    <p className="py-6 w-11/12">I'm a MERN Stack web developer and WordPress theme developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. </p>
                    <a href="/contact" className="custome-btn uppercase">hire Me</a>
                    <div className="social-icons flex gap-5 mt-12">
                        <a href="https://www.github.com/rana-arju"><img src={Github} alt="" /></a>
                        <a href="https://www.linkedin.com/in/rana-arju"> <img src={Linkedin} alt="" /></a>
                    <a href="https://www.facebook.com/ranaarju1"><img src={Facebook} alt="" /></a>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;