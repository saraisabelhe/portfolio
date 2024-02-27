
import { Link } from 'react-router-dom'

import styles from './styles.module.css'


function Navbar() {
    return (
        <div className={styles.conteiner_header}>
        <header >
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> 
        </header>
        
        </div>
    )
}

export default Navbar