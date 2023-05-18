/*import styles from '../components/ListofProjects.module.css'

const ListofProjects = (props) => {
    return (
            <className={styles.ListofProjects}>{props.children}
    )
}

export default ListofProjects*/

import styles from '../components/ListofProjects.module.css';

const ListofProjects = (props) => {
  return (
    <div className={styles.ListofProjects}>{props.children}</div>
  );
};

export default ListofProjects;
