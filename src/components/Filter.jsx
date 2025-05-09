import styles from "../styles/Home.module.css";

export const Filter = ({ setFilter }) => {
  const filterOptions = ["all", "completed", "active"];
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.filterButtons}>
          {filterOptions.map((filter, index) => (
            <div key={index}>
              <button
                className={styles.allButton}
                onClick={() => setFilter(filter)}
              >
                {filter}
              </button>
            </div>
          ))}
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
