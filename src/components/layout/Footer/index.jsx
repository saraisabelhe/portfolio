import styles from './styles.module.css';
import {  FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer( {email, insta, linkedin, github} ) {
    return(
        <div className={styles.conteiner}>
            <h2>&copy;2024 developer Vitor frança</h2>
            <div className={styles.conteiner_icon}>
                <div className={styles.icon}><a href={linkedin}><FaLinkedin size={15}/></a></div>
                <div className={styles.icon}><a href={github}><FaGithub size={15}/></a></div>
                <div className={styles.icon}><a href={email}><FiMail size={15}/></a></div>
                <div className={styles.icon}><a href={insta}><FaInstagram size={15}/></a></div>
            </div>
        </div>
    )
}

export default Footer