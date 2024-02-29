import ImgHtml from '../../../assets/html2.png';
import ImgCss from '../../../assets/css2.png';
import ImgJs from '../../../assets/javascript2.png';
import ImgGithub from '../../../assets/github.png';
import ImgGit from '../../../assets/git.png';

import styles from './styles.module.css'


function Conteudo () {
    return (
        <div className={styles.conteiner}>
            <div>
                <h1>SKILLS</h1>
            </div>
            <div>
                <div><img src={ImgHtml} alt="" /></div>
                <div><img src={ImgCss} alt="" /></div>
                <div><img src={ImgJs} alt="" /></div>
                <div><img src={ImgGithub} alt="" /></div>
                <div><img src={ImgGit} alt="" /></div>
            </div>
        </div>
    )
}

export default Conteudo