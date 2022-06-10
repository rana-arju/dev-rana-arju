import React from 'react';
  // import Swiper JS
import {Swiper, SwiperSlide }from 'swiper/react';
  // import Swiper styles
import 'swiper/css';
import Project from './Project';
const Portfolio = () => {
    return (
        <div className='w-11/12 mx-auto' id='protfolio'>
            <div>
                <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-bold text-center my-10'>my recent <span className='cl-title'>Project</span></h2>
            </div>
            {/* Slider */}
               <Swiper
                spaceBetween={50}
                breakpoints={{
                    640:{
                        width: 640,
                        slidesPerView: 1
                    },
                    800:{
                        width: 800,
                        slidesPerView: 2
                    }
                }}
                slidesPerView={1}
                grabCurso={true}
               
                >
                <SwiperSlide><Project img="https://i.ibb.co/84SPsg0/bi-cycle-full-view.png" title="Bi-Cycle - Manufacturer website" des="This is Bi-Cycle - Manufacturer website where users can order products.This website contains two types of dashboards one user and another admin" tech1="#mongodb" tech2="#Expresjs"tech3="#Reactjs"tech4="#tailwindCss" live="https://bicycle-2a227.web.app/" code="https://github.com/rana-arju/bi-cycle-client" details="https://drive.google.com/file/d/1m7CpDhcNVPMsaDX2Q4WLum1F_JRn_SWf/view" /></SwiperSlide>

                <SwiperSlide><Project img="https://i.ibb.co/1fVqpSn/logika-full-view-1-1.png" title="Logistics - Logistics & Transportation" des="This is the Logisco website where users can order products. Admin can upload, update and delete any product." tech1="#mongodb" tech2="#Expresjs"tech3="#Reactjs"tech4="#tailwindCss" live="https://logica-f4803.web.app/" code="https://github.com/rana-arju/logico-warehouse-client" details="https://drive.google.com/file/d/1m7CpDhcNVPMsaDX2Q4WLum1F_JRn_SWf/view" /></SwiperSlide>
                
                <SwiperSlide><Project img="https://i.ibb.co/7yDmsHS/business-1-1.png" title="Agency- Portfolio" des="This is a portfolio single-page website. On the Hero section using the slider plugin, on the review section using the carousel plugin, and for the countdown using a jquery plugin" tech1="#jQuery" tech2="#Css"tech3="#html" live="https://one-page-creative.netlify.app/" code="https://github.com/rana-arju/one-page-website" details="https://drive.google.com/file/d/1m7CpDhcNVPMsaDX2Q4WLum1F_JRn_SWf/view" /></SwiperSlide>
               
               
                </Swiper>
        </div>
    );
};

export default Portfolio;