import { useState } from "react";

import img1 from '../imgs/laptop.jpg'
import hal from '../imgs/halloween.png'
import outdoors from '../imgs/outdoors.png'
import budgetapp from '../imgs/budgetapp.jpg'
import itemmaster from '../imgs/itemmaster.jpg'
import tictactoe from '../imgs/TicTacToe.png'
import colorgame from '../imgs/colorgame.png'

//swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faGlobe, faDesktop } from "@fortawesome/free-solid-svg-icons";

const Projects = ({updateAboutmeState}) => {


    const showStory = () => {
        updateAboutmeState(true)
    }

    
    return ( 
        <section className="projects">
            <div className="row" id = "projectsRow">
                    <h2>What I've been working on</h2>

                    <div className="projects__images--container">

                            <div className="swiper-container">
                            <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            // pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                        <SwiperSlide><img src={itemmaster} alt="itemmaster" className="projects__image projects__image--1"/></SwiperSlide>
                        <SwiperSlide><img src={hal} alt="todolist" className="projects__image projects__image--3"/></SwiperSlide>
                        <SwiperSlide><img src={budgetapp} alt="budgetapp" className="projects__image projects__image--3"/></SwiperSlide>
                        <SwiperSlide><img src={tictactoe} alt="tictactoe" className="projects__image projects__image--3"/></SwiperSlide>
                        <SwiperSlide><img src={outdoors} alt="outdoors" className="projects__image projects__image--3"/></SwiperSlide>
                        <SwiperSlide><img src={colorgame} alt="colorgame" className="projects__image projects__image--3"/></SwiperSlide>
                            </Swiper>

                <div className="projects__text">
                    <button link = "#" className="projbutton" onClick={showStory}>Get to know the full story<span>&rarr;</span></button>
                    {/* <ul>
                        <li>Item master, a full crud application including ftp, and barcode generator, linked to a mysql database.</li>
                        <li>A basic todo list hallowen themed.</li>
                        <li>a website used for booking outdoor events, such as mountainbiking, camping etc. - Front end created with html5, scss and backend is currently in proccess with c#.</li>
                        <li>TheBudgetApp - An application to help individuals that struggle to balance out their monthly finances. Inspired by using excel for a number of years than created with ReactJS for frontend, nodejs for backend and mongodb as a database.</li>
                    </ul> */}	
                </div>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default Projects;