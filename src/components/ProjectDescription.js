import styles from '../components/ProjectDescription.module.css'

const ProjectDescription = (props) => {
  return (
    <div className={styles.ProjectDescription}>{props.children}</div>
  );
};

export default ProjectDescription;