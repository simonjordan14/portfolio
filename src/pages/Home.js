import React, { useState } from "react";
import Header from "../components/Header";
import SectionIntro from "../components/SectionIntro";
import Services from "../components/Services";
import Projects from "../components/Projects";
import SectionAbout from "../components/SectionAbout";
import Contact from "../components/Contact";
import AboutMe from "./AboutMe";


const Home = () => {

    const [showAboutMe, setShowAboutMe] = useState(false);


    const updateAboutmeState = () =>{
        setShowAboutMe(!showAboutMe)
    }

    return (
        <div>
        {showAboutMe && <AboutMe updateAboutmeState={updateAboutmeState}/>}
        <Header />
        <SectionIntro />
        <Services />
        <Projects updateAboutmeState={updateAboutmeState}/>
        <SectionAbout />
        <Contact />
        </div>
    )

}


export default Home;