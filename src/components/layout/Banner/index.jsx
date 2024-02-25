import styles from './styles.module.css';
import Img from '../../../assets/banner2.png'
import Imgbanner from '../../../assets/bannerfundo.jpg'

function Banner() {
    return (

        <div className={styles.conteiner_banner}>
            <div className={styles.conteiner_titulo}>
                <h1>Ola, Seja Bem-vindo.</h1>
                <h3>Sou Vitor França, WebDesigner</h3>
            </div>
            <picture>
                <img src={Img} alt="" />
            </picture>
        </div>

    )
}

export default Banner