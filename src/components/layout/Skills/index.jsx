import ImgHtml from '../../../assets/html.png';
import ImgCss from '../../../assets/css.png';
import ImgJs from '../../../assets/javascript.png';
import ImgGithub from '../../../assets/github1.png';
import ImgGit from '../../../assets/git1.png';
import ImgReact from '../../../assets/react1.png'

import styles from './styles.module.css'


function Skills ( { scrollRef }) {
    return (
        <div ref={scrollRef} className={styles.conteiner}>
            <div>
                <h1 className={styles.conteiner_skill}>SKILLS</h1>
            </div>
            <div className={styles.conteiner_icons}>
                <div className={styles.conteiner_item}><img src={ImgHtml} alt="" /><h3>HTML</h3></div>
                <div className={styles.conteiner_item}><img src={ImgCss} alt="" /><h3>CSS</h3></div>
                <div className={styles.conteiner_item}><img src={ImgJs} alt="" /><h3>JS</h3></div>
                <div className={styles.conteiner_item}><img src={ImgGithub} alt="" /><h3>GitHub</h3></div>
                <div className={styles.conteiner_item}><img src={ImgGit} alt="" /><h3>Git</h3></div>
                <div className={styles.conteiner_item}><img src={ImgReact} alt="" /><h3>React</h3></div>
            </div>
        </div>
    )
}

export default Skills