import styles from './styles.module.css';
import img from '../../../assets/imgsobre.png';


function About( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
        <div className={styles.conteiner_texto}>
            <h1>Introdução Sobre Mim</h1>
            <p>Olá! Sou Vitor França, um entusiasta da tecnologia 
                <br/><br/>
                desenvolvedor com experiência em <span>FrontEnd.</span> Fluente em <span>javascript</span> 
                <br/><br/>
                Valorizo a colaboração, busco aprendizado contínuo e estou comprometido em causar impacto positivo. 
                <br/><br/> 
                Aberto para colaborações e discussões sobre tecnologia.
            </p>
        </div>
        <div className={styles.conteiner_img}><img src={img} alt="" /></div>
    </div>
)
}

export default About;