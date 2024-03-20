import styles from './styles.module.css'
import img from '../../../assets/imgsobre.png'


function Sobre( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
        <div className={styles.conteiner_texto}><h3>Olá! Sou Vitor França, um entusiasta da tecnologia e desenvolvedor com experiência em FrontEnd. <br/><br/> Valorizo a colaboração, busco aprendizado contínuo e estou comprometido em causar impacto positivo. <br/><br/> Aberto para colaborações e discussões sobre tecnologia.</h3></div>
        <div className={styles.conteiner_img}><img src={img} alt="" /></div>
    </div>
)
}

export default Sobre;