import styles from './styles.module.css';
import Img from '../../../assets/banner2.png'

function Banner() {
    return (

        <div className={styles.conteiner_banner}>
        <h1>Portfolio do Vitor</h1>
        <img src={Img} alt="" />
        </div>

    )
}

export default Banner