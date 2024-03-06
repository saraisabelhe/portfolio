import styles from './styles.module.css'


function Sobre( { scrollRef }) {
    return ( 
    <div ref={scrollRef} className={styles.conteiner}>
        <div className={styles.conteiner_filho}>texto aqui</div>
        <div className={styles.conteiner_filho}>imagem aqui</div>
    </div>
)
}

export default Sobre;