import styles from '../components/NeonBox.module.css'

const NeonBox = (props) => {
    return (
            <div className={styles.NeonBox}>{props.children}</div>
    )
}

export default NeonBox

