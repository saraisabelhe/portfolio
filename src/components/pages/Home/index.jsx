import React, { useRef } from 'react';

import Banner from '../../layout/Banner';
import Skills from '../../layout/Skills';
import Navbar from '../../layout/Navbar';
import Sobre from '../../layout/About';

function Home() {
    
    const componenteBRef = useRef(null);
    
    const scrollComponenteB = () => {

        componenteBRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>

            <Navbar scrollComponenteB={scrollComponenteB} />
            <Banner/>
            <Skills/>
            <Sobre scrollRef={componenteBRef}/>
        </div>
    )
}

export default Home