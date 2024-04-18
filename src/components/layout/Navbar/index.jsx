import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

import styles from './styles.module.css'
import Img from '../../../assets/logo5.png'




function Navbar( {scrollComponenteB} ) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className={styles.conteiner_header}>
            <header>
                <div className={styles.conteiner_logo}>
                    <img src={Img} alt="" />
                </div>
                <div className='Hamburguer-menu'>
            <button className="hamburger-icon" onClick={toggleMenu}>
                <AiOutlineMenu/>
            </button>
            {isOpen && (
                <nav className="menu">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link onClick={scrollComponenteB}>Sobre</Link></li>
                    </ul>
                </nav>
            )}
        </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link onClick={scrollComponenteB}>Sobre</Link></li>
                    </ul>
                </nav>
            </header>
        
        </div>
    )
}

export default Navbar