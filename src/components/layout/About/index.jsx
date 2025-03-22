import styles from './styles.module.css';
import img from '../../../assets/imgsobre.png';


function About( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
            <h1><span>Introdução Sobre Mim</span></h1>
            <p>Sou estudante de <span>Psicologia</span> com um profundo interesse no comportamento humano e no funcionamento da mente. 
                <br/><br/>
                Estou sempre em busca de novos <span>conhecimentos</span> e <span>experiências</span> que me permitam expandir minha compreensão da área e sua aplicação prática
                contribuindo para o bem-estar e desenvolvimento pessoal de indivíduos e comunidades. 
                <br/><br/> 
                Tenho experiência acadêmica em <span>estágios escolares</span> e <span>avaliação psicológica</span>
                <br></br>
                além de participar ativamente de ligas acadêmicas de Ciências Forenses e Psiquiatria. Demonstro interesse significativo nas áreas social, hospitalar, jurídica e criminal.
            </p>
            <div className={styles.conteiner_img}><img src={img} alt="" /></div>
    </div>
)
}

export default About;