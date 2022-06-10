import React from 'react';
import rana from '../images/rana.png';
const About = () => {
    return (
        <div id='about'>
        <div class="hero h-full">
        <div class="hero-content flex-col gap-10 lg:flex-row">
            <img src={rana} alt="..." className="1/2" />
            <div>
            <h3 class="text-2xl text-center md:text-left md:text-3xl lg:text-5xl font-bold">About <span className='cl-title'>Me</span></h3>
            <p class="py-6">Hey there, I'm Rana Arju. I'm a Student of Computer technoly at Cox's Bazar polytechnic institute. I'm a Jr MERN Stack web developer and WordPress theme developer. I love being in this line of work Because I'm passionate about technology, design, and innovation. I'm skilled at Node js, Express js, MongoDB, React js, javascript, firebase, Github, JWT, python, CSS3, HTML5, and WordPress theme development.</p>
            <a href="https://drive.google.com/file/d/1m7CpDhcNVPMsaDX2Q4WLum1F_JRn_SWf/view?usp=sharing" class="custome-btn">My Resume</a>
            </div>
        </div>
        </div>
        </div>
    );
};

export default About;