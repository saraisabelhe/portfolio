import React, { useRef } from 'react';

import Banner from '../../layout/Banner';
import Skills from '../../layout/Atuacao';
import Navbar from '../../layout/Navbar';
import About from '../../layout/About';
import Footer from '../../layout/Footer';

function Home() {
    
    const componenteAboutRef = useRef(null);
    const componenteSkillRef = useRef(null);
    


    const scrollAbout = () => {

        componenteAboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollSkill = () => {
        
        componenteSkillRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollHome = () => {
        window.scrollTo({   top: 0, behavior: 'smooth' });
    };
    return (
        <div>

            <Navbar 
                
                scrollComponenteAbout={ scrollAbout } 
                scrollComponenteSkill={ scrollSkill }
                scrollComponenteHome={ scrollHome }
            />
            <Banner/>
            <Skills scrollRef={componenteSkillRef}/>
            <About scrollRef={componenteAboutRef}/>
            <Footer 
                email='mailto:saraisabelff@gmail.com'
                insta='https://www.instagram.com/sara_.bel/'
                linkedin='https://br.linkedin.com/in/sara-isabel-246270245'
            />
        </div>
    )
}

export default Home