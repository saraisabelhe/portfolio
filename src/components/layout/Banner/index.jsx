import styles from './styles.module.css';
import Img from '../../../assets/banner2.png'

function Banner() {
    return (

        <div className={styles.conteiner_banner}>
        <h1>Ola, Bem vindo</h1>
        <picture><img src={Img} alt="" /></picture>
        </div>

    )
}

export default Banner