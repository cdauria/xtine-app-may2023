import styles from '../components/CardContent.module.css'

const CardContent = (props) => {
    return (
            <div className={styles.CardContent}>{props.children}</div>
    )
}

export default CardContent





