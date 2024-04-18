import Interface from '../../layout/Interface'
import Navbar from '../../layout/Navbar'
import About from '../About'
import Sobre from '../../layout/Sobre'
import React, { useRef } from 'react'


function Home() {
    
    const componenteBRef = useRef(null);
    
    const scrollComponenteB = () => {

        componenteBRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div>

            <Navbar scrollComponenteB={scrollComponenteB} />
            <Interface/>
            <Sobre scrollRef={componenteBRef}/>
        </div>
    )
}

export default Home