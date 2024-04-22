import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import simchase from '../imgs/simchase.png'
import photography from '../imgs/photography.jpg'
import chase from '../imgs/chase.png'
import jax from '../imgs/jax.jpeg'



const SectionAbout = () => {



    return ( 
        <section className="section__about">

            <div className="row" id="aboutRow">
                <div className="section__about--textContainer">
                
                <div className="section__about--text">
                    <h2>About me <FontAwesomeIcon icon={faSmile} className='smileicon'/></h2>
                    <p>I'm British but born and raised in the heart of Malta, St Julians. A father and dog owner. <br />
                    Advanced diploma in computing Graduate. Motorsport Enthuasist, bmx rider and love photography.<br /></p>
                </div>



                {/* <p>Graduate from an Advanced diploma in computing. Been building web applications for the past 5 years.
                    <br /> Starting off with html and css, to Javascript Jquery then ReactJS for front end. A majority of the applications I've created are done using nodejs as a backend, connected to mysql or non sequel databases. Also have experience in c# and java.
                </p>
                <a href="#">Read the full story</a> */}
                </div>
                <div className="section__about--images">
                    <img src={simchase} alt="" className='aboutimg  img--1'/>
                    <img src={jax} alt="" className='aboutimg  img--2'/>
                    <img src={chase} alt="" className='aboutimg  img--3'/>
                </div>
            </div>

        </section>
     );
}
 
export default SectionAbout;