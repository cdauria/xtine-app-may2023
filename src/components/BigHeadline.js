import styles from '../components/BigHeadline.module.css'

const BigHeadline = (props) => {
    return (
        <h1 className={styles.BigHeadline}>{props.children}</h1>
    )
    }

export default BigHeadline