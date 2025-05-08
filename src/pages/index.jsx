import { List } from "@/components/List";
import { Task } from "@/components/Task";
import { Form } from "@/components/Form";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Component1 } from "@/components/100comp/Component1";

export const Home = () => {
  const data = "100 Component";
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("");
  const handleDelete = (id) => {
    const todoDelete = taskList.filter((todo) => todo.id !== id);
    setTaskList(todoDelete);
  };
  // const handleActive = (act) => {
  //   const doActive = taskList.map((active) => )
  // }

  const handleComp = (checkId) => {
    const doComp = taskList.map((comp) => comp.id === checkId);
    setTaskList(doComp);
  };

  console.log(taskList);
  return (
    <div className={styles.container}>
      {/* <Component1 props1={data} /> */}

      <div>
        <Form setTaskList={setTaskList} taskList={taskList} />
        {taskList.map((task) => (
          <Task
            task={task}
            removeTaskById={handleDelete}
            handleComp={handleComp}
          />
        ))}
        <List />
      </div>
    </div>
  );
};

export default Home;
