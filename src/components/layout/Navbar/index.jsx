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
        <div className={styles.conteiner}>
            <header className={styles.conteiner_header}>
                <div className={styles.conteiner_logo}>
                    <img src={Img} alt="" />
                </div>
                <div className={styles.hamburguer_menu}>
                    <button className={styles.hamburguer_icon} onClick={toggleMenu}>
                        <AiOutlineMenu size={25}/>
                    </button>
                    {isOpen && (
                        <nav >
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link onClick={scrollComponenteB}>Sobre</Link></li>
                            </ul>
                        </nav>
                    )}
                </div>
                <div className={styles.menu_principal}>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link onClick={scrollComponenteB}>Sobre</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        
        </div>
    )
}

export default Navbar