import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

import styles from './styles.module.css'
import Img from '../../../assets/logo.png'




function Navbar( {scrollComponenteAbout, scrollComponenteSkill, scrollComponenteHome} ) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false); // Define o estado do menu hamburguer para fechado
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
                                <li><Link onClick={() => {scrollComponenteHome(); closeMenu()}}>Home</Link></li>
                                <li><Link onClick={() => {scrollComponenteSkill(); closeMenu()}}>Skill</Link></li>
                                <li><Link onClick={() => {scrollComponenteAbout(); closeMenu()}}>About</Link></li>
                            </ul>
                        </nav>
                    )}
                </div>
                <div className={styles.menu_principal}>
                    <nav>
                        <ul>
                            <li><Link onClick={scrollComponenteHome}>Home</Link></li>
                            <li><Link onClick={scrollComponenteSkill}>Skill</Link></li>
                            <li><Link onClick={scrollComponenteAbout}>About</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        
        </div>
    )
}

export default Navbar