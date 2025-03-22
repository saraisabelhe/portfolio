import { BrainCircuit, ClipboardList, FileText, HeartHandshake, Users, HeartPulse, UserCheck } from 'lucide-react';

import styles from './styles.module.css';


function Atuacao ( { scrollRef }) {
    return (
        <div ref={scrollRef} className={styles.conteiner}>
            <div className={styles.conteiner_atuacao}>
                <h1>Professional Action</h1>
                <p>
                    Sou psicólogo clínico e atuo ajudando pessoas 
                    <br></br> a compreenderem e 
                    lidarem com questões emocionais,
                    <br></br>
                    comportamentais e de relacionamento.
                    <br></br> 
                    Por meio da psicoterapia, ofereço suporte para promover o autoconhecimento,
                    <br></br>
                    aliviar o sofrimento e desenvolver estratégias para enfrentar desafios.
                </p>
                <div className={styles.conteiner_item}><UserCheck className={styles.icon} /><h2></h2></div>     
            </div>
            <div className={styles.conteiner_icons}>
                <div className={styles.conteiner_item}><HeartHandshake className={styles.icon} /><h2>Abordagem Humanista </h2></div>
                <div className={styles.conteiner_item}><BrainCircuit className={styles.icon} /><h2>Psicoterapia</h2></div>
                <div className={styles.conteiner_item}><ClipboardList className={styles.icon} /><h2>Avaliação Psicológica</h2></div>
                <div className={styles.conteiner_item}><FileText className={styles.icon} /><h2>Diagnóstico Clínico</h2></div>
                <div className={styles.conteiner_item}><Users className={styles.icon} /><h2>Técnicas de Entrevista Clínica</h2></div>
                <div className={styles.conteiner_item}><HeartPulse className={styles.icon} /><h2>Abordagens Terapêuticas</h2></div>
            </div>
        </div>
    )
}

export default Atuacao