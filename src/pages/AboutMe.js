import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';



const AboutMe = ({updateAboutmeState}) => {

    const updateState = () => {
        updateAboutmeState(false);
    }

    return (
    // <div className={fullStory === true ? 'aboutme' : 'dontShow'}>
    <div className="aboutme">
        <div className="aboutme__button--container">
            <button className="transparentButton" onClick={(()=>{updateState()})}>
                <span className="aboutme__span">
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </button>
        </div>
        <div className="aboutme__text--container">
        <p>
            My passion for IT goes way back to growing up around computers and always wanted to pursue something related to technology. When the time came to choose between Mechnical Engineering, I believed technology would be the ideal decision.

            <span className="aboutme__question">Why web development ?</span>
            I've always been fascinated and enjoyed browsing the web, whilst studying for a diploma at Mcast, I decided that Web development was what I wanted.

            <span className="aboutme__question">How did it start and where is it going ?</span>
            It started from learning the basics of html and css. Learn't from a collaboration of purchasing web development magazines, online tutorials and lectures at MCAST and STC Higher Education. <br />
            Once I learn't the basics, I then went on to learn the DOM, through vanilla JS and JQuery.

            <span className="aboutme__question">What web technologies did you attempt ?</span>
            Once I had the basic understanding of DOM using vanilla JS and JQuery, I then did some research on what languages I should pursue. At the time it was between Angular and React. <br />

            I started off with Angular and had created an E-Commerce website using AngularJS for frontend and Ruby on Rails at the back end and postgress sql for the database. <br />

            I then switched to React as I thought it was the higher demand at the time. Since then I've created multiple projects to gain the required knowledge and experience to become a web developer.

            for styling I use SCSS as I believe it gives a more organised object oriented approach.

            <span className="aboutme__question">Do you prefer backend or frontend ?</span>
            I don't specifically prefer any of the both, but I believe my greatest strength is on the frontend as it is harder to be creative and practise back end and there is a lot of ideas that relate to front end.

            <span className="aboutme__question"> What would be your biggest personal project? </span>
            Definately, the budget app.<br />
            I used to use excel sheets to calculate my monthly financials by creating formulas and functions, then decided to just create an online application using the MERNstack terminology. I've been creating this application for the past two years and has massively helped me gain more knowledge and experience of web development.

            <span className="aboutme__question"> What your ideal dream job ?</span>
            I would love the opportunity to be part of a small web development agency that would give me the opportunity to do what I enjoy on a daily basis.

        </p>
        </div>
    </div>
    );
}
 
export default AboutMe;