import { useState } from "react";
import styles from "../styles/Home.module.css";

export const List = () => {
  const [tasks, setTasks] = useState([1, 2, 4]);
  const [add, setAdd] = useState("");

  const addText = (event) => {
    const addedText = event.target.value;
    setAdd(addedText);
  };

  const addTask = () => {
    console.log(add);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>To-Do-List</h1>
        <form className={styles.addForm}>
          <input
            type="text"
            maxLength="100"
            placeholder="Add a new task..."
            className={styles.formInput}
            onChange={addText}
          />
          <button type="submit" className={styles.addButton} onClick={addTask}>
            Add
          </button>
        </form>
        <div className={styles.filterButtons}>
          <button className={styles.allButton}>All</button>
          <button className={styles.activeButton}>Acitve</button>
          <button className={styles.compButton}>Completed</button>
        </div>
        {tasks.map((task) => {
          return (
            <div className={styles.task}>
              <div className={styles.checkerText}>
                <input type="checkbox" className={styles.checkBox} />
                <p className={styles.blah}>{add}</p>
              </div>
              <button className={styles.deleteButton}>Delete</button>
            </div>
          );
        })}
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
