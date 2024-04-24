import React, { useRef } from 'react';

import Banner from '../../layout/Banner';
import Skills from '../../layout/Skills';
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
                email='mailto:vitusfranca@gmail.com'
                insta='https://www.instagram.com/vitor_sfr/'
                github='https://github.com/VitusFranca'
                linkedin='https://www.linkedin.com/in/vitor-fran%C3%A7a-b90b23305/'
            />
        </div>
    )
}

export default Home