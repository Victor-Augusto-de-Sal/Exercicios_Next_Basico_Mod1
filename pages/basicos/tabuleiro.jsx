import Linha from '../../components/linha'
import styles from '../css/tabuleiro.module.css'
export default function Tabuleiro() {
    return (
        <div className={styles.tabuleiro}>
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
            <Linha />
            <Linha preta />
        </div>
    )
}