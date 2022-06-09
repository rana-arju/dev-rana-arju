import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';
import Portfolio from './Portfolio';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;