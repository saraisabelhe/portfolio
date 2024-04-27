import styles from './styles.module.css';
import Img from '../../../assets/banner.webp';


function Banner() {
    return (

        <div className={styles.conteiner_banner}>
            <div className={styles.conteiner_titulo}>
                <h1>Ola, Bem-vindo.</h1>
                <h2>Sou Vitor França, <span>Frontend.</span></h2>
                <a href="mailto:vitusfranca@gmail.com">
                    <button className={styles.contato}>Contato</button>
                </a>
            </div>
            <div className={styles.conteiner_img}>
                <img src={Img} alt="" />
            </div>
        </div>

    )
}

export default Banner