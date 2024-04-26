import styles from './styles.module.css';
import Img from '../../../assets/banner.webp';


function Banner() {
    return (

        <div className={styles.conteiner_banner}>
            <div className={styles.conteiner_titulo}>
                <h1>Ola, Bem-vindo.</h1>
                <h3>Sou Vitor França, <span>Frontend.</span></h3>
                <a href="mailto:vitusfranca@gmail.com">
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