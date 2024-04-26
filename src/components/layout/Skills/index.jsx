import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5, FaGitSquare, FaGithubSquare  } from 'react-icons/fa';

import styles from './styles.module.css';


function Skills ( { scrollRef }) {
    return (
        <div ref={scrollRef} className={styles.conteiner}>
            <div>
                <h1 className={styles.conteiner_skill}>SKILLS</h1>
            </div>
            <div className={styles.conteiner_icons}>
                <div className={styles.conteiner_item}><FaHtml5 className={styles.icon} size={80}/><h2>HTML</h2></div>
                <div className={styles.conteiner_item}><FaCss3Alt className={styles.icon} size={80}/><h2>CSS</h2></div>
                <div className={styles.conteiner_item}><FaJsSquare className={styles.icon} size={80}/><h2>JS</h2></div>
                <div className={styles.conteiner_item}><FaGithubSquare className={styles.icon} size={80}/><h2>GitHub</h2></div>
                <div className={styles.conteiner_item}><FaGitSquare className={styles.icon} size={80}/><h2>Git</h2></div>
                <div className={styles.conteiner_item}><FaReact className={styles.icon} size={80}/><h2>React</h2></div>
            </div>
        </div>
    )
}

export default Skills