import styles from './styles.module.css';
import Img from '../../../assets/banner.png';


function Banner() {
    return (

        <div className={styles.conteiner_banner}>
            <div className={styles.conteiner_titulo}>
                <h1>Ola, Bem-vindo.</h1>
                <h2>Sou Sara Isabel, <span>Psicologa.</span></h2>
                <a href="mailto:saraisabelff@gmail.com">
                    <button className={styles.contato}>Contato</button>
                </a>
            </div>
            <picture>
                <img src={Img} alt="" />
            </picture>
        </div>

    )
}

export default Banner