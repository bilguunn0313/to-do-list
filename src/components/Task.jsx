import styles from "../styles/Home.module.css";

export const Task = ({ task }) => {
  return (
    <div>
      <div className={styles.task}>
        <div className={styles.checkerText}>
          <input type="checkbox" className={styles.checkBox} />
          <p className={styles.blah}>{task.taskName}</p>
        </div>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
};
