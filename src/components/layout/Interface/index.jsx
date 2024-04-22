import Banner from '../Banner'
import Navbar from '../Navbar'
import Conteudo from '../Skills'
import styles from './styles.module.css'

function Interface() {
    return (
        <div className={styles.conteiner}>
            
            <Banner/>
            <Conteudo/>
            
               
        </div>
    ) 
}

export default Interface