import styles from './styles.module.css';
import {  FaLinkedin, FaInstagram} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer( {email, insta, linkedin} ) {
    return(
        <div className={styles.conteiner}>
            <h2>&copy;2025 Psi Sara Isabel</h2>
            <div className={styles.conteiner_icon}>
                <div className={styles.icon}><a href={linkedin} aria-label='Linkedin de Sara Isabel'><FaLinkedin /></a></div>
                <div className={styles.icon}><a href={email} aria-label='Enviar e-mail para Sara Isabel'><FiMail/></a></div>
                <div className={styles.icon}><a href={insta} aria-label='Instagram de Sara Isabel'><FaInstagram/></a></div>
            </div>
        </div>
    )
}

export default Footer