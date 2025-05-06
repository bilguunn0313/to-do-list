import styles from "../styles/Home.module.css";

export const List = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.filterButtons}>
          <button className={styles.allButton}>All</button>
          <button className={styles.activeButton}>Acitve</button>
          <button className={styles.compButton}>Completed</button>
        </div>

        <div className={styles.taskResult}>
          <p>0 of 2 complete</p>
          <button className={styles.clearButton}>Clear Completed</button>
        </div>
        <div className={styles.footer}>
          <span>Powered By </span>
          <span className={styles.pinecone}>Pinecone Academy</span>
        </div>
      </div>
    </div>
  );
};
