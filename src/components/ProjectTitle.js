/*import styles from '../components/ListofProjects.module.css'

const ListofProjects = (props) => {
    return (
            <className={styles.ListofProjects}>{props.children}
    )
}

export default ListofProjects*/

import styles from '../components/ProjectTitle.module.css';

const ProjectTitle = (props) => {
  return (
    <div className={styles.ProjectTitle}>{props.children}</div>
  );
};

export default ProjectTitle;
