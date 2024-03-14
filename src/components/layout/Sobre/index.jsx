import styles from './styles.module.css'


function Sobre( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
        <div className={styles.conteiner_filho}><h3>Olá! Sou Vitor França, um entusiasta da tecnologia e desenvolvedor apaixonado. Minha jornada na programação começou em 2019 estudando em casa. Tenho experiência em Javascript. Meus valores incluem excelência técnica, colaboração e aprendizado contínuo. Estou animado com as oportunidades futuras e comprometido em criar um impacto positivo. Se quiser colaborar ou apenas bater um papo sobre tecnologia, estou à disposição!</h3></div>
        <div className={styles.conteiner_filho}><h3>imagem aqui</h3></div>
    </div>
)
}

export default Sobre;