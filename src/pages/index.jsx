import { Filter } from "@/components/Filter";
import { Task } from "@/components/Task";
import { Form } from "@/components/Form";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Component1 } from "@/components/100comp/Component1";

export const Home = () => {
  const data = "100 Component";
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleDelete = (id) => {
    const todoDelete = taskList.filter((todo) => todo.id !== id);
    setTaskList(todoDelete);
  };

  const toggleCheck = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(toggledTask);
  };
  const filteredTask = taskList.filter((task) => {
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  });

  const clearTask = taskList.filter((clear) => clear.isCompleted === true);

  console.log(taskList);
  return (
    <div className={styles.container}>
      {/* <Component1 props1={data} /> */}

      <div>
        <Form setTaskList={setTaskList} taskList={taskList} />

        {filteredTask.map((task, index) => (
          <Task
            key={index}
            task={task}
            removeTaskById={handleDelete}
            toggleCheck={toggleCheck}
          />
        ))}
        {}
        <Filter
          setFilter={setFilter}
          clearTask={clearTask}
          taskList={taskList}
        />
      </div>
    </div>
  );
};

export default Home;
