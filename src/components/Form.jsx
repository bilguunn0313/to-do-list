import { useState } from "react";
import styles from "../styles/Home.module.css";

export const Form = ({ setTaskList, taskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      taskName: inputValue,
      isCompleted: false,
    };
    setTaskList([...taskList, newTask]);
    setInputValue("");
  };

  return (
    <div>
      <h1 className={styles.title}>To-Do-List</h1>
      <form className={styles.addForm}>
        <input
          value={inputValue}
          placeholder="Add a new task..."
          className={styles.formInput}
          onChange={handleChange}
        />
        <button type="submit" className={styles.addButton} onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};
