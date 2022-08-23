import styles from '../pages/css/subdivisao.module.css';
export default function Subdivisao(props) {
    return (
        <div className={styles.container}>
            <div className={styles.subdivisao} style={{backgroundColor: props.preta ? "#000" : "#fff"}}></div>
        </div>
    )
}