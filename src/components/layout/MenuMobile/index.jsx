import './styles.module.css';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function MenuMobile( {scrollComponenteB} ) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='Hamburguer-menu'>
            <button className="hamburger-icon" onClick={toggleMenu}>
                <AiOutlineMenu/>
            </button>
            {isOpen && (
                <nav className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><a href='' onClick={scrollComponenteB} >Sobre</a></li>
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default MenuMobile