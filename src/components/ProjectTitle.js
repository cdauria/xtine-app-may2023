import styles from '../components/ProjectTitle.module.css'

const ProjectTitle = (props) => {
    return (
        <h1 className={styles.ProjectTitle}>{props.name}</h1>
    )
    }

export default ProjectTitle