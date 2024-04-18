import './styles.module.css';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function MenuMobile() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIssOpen(!isOpen);
    };

    return (
        <div className='Hamburguer-menu'>
            <button onClick={toggleMenu}>
                <AiOutlineMenu/>
            </button>
            {isOpen && (
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link onClick={scrollComponenteB}>Sobre</Link></li>
                        </ul>
                    </nav>
                        )
            }

        </div>
    )
}

export default MenuMobile