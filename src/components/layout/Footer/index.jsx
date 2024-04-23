import styles from './styles.module.css'
import {  FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
    return(
        <div className={styles.conteiner}>
            <h2>&copy;2024 developer Vitor frança</h2>
            <div className={styles.conteiner_icon}>
                <div className={styles.icon}><FaLinkedin size={15}/></div>
                <div className={styles.icon}><FaGithub size={15}/></div>
                <div className={styles.icon}><FiMail size={15}/></div>
                <div className={styles.icon}><FaInstagram size={15}/></div>
            </div>
        </div>
    )
}

export default Footer