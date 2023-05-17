import styles from '../components/ListofProjects.module.css'

const ListofProjects = (props) => {
    return (
            <h1 className={styles.ListofProjects}>{props.children}</h1>
    )
}

export default ListofProjects