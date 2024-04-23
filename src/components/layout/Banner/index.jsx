import styles from './styles.module.css';
import Img from '../../../assets/banner2.png'


function Banner() {
    return (

        <div className={styles.conteiner_banner}>
            <div className={styles.conteiner_titulo}>
                <h1>Ola, Bem-vindo.</h1>
                <h3>Sou Vitor França, WebDesigner</h3>
                <button>Contato</button>
            </div>
            <picture>
                <img src={Img} alt="" />
            </picture>
        </div>

    )
}

export default Banner