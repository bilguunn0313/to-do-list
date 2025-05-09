import styles from "../styles/Home.module.css";

export const Task = ({ task, removeTaskById, toggleCheck }) => {
  const onToggle = () => {};
  return (
    <div className={styles.innerContainer}>
      <div className={styles.task}>
        <div className={styles.checkerText}>
          <input
            type="checkbox"
            className={styles.checkBox}
            checked={task.isCompleted}
            onChange={() => toggleCheck(task.id)}
          />
          <p
            style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
            className={styles.blah}
          >
            {task.taskName}{" "}
          </p>
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => removeTaskById(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
