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
    return (
        <div>

            <Navbar 
                scrollComponenteAbout={ scrollAbout } 
                scrollComponenteSkill={ scrollSkill }
            />
            <Banner/>
            <Skills scrollRef={componenteSkillRef}/>
            <About scrollRef={componenteAboutRef}/>
            <Footer/>
        </div>
    )
}

export default Home