import { List } from "@/components/List";
import { Task } from "@/components/Task";
import { Form } from "@/components/Form";
import { useState } from "react";

export const Home = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <div>
      <div>
        <Form setTaskList={setTaskList} taskList={taskList} />
        {taskList.map((task, id) => (
          <Task key={id} task={task} />
        ))}
        <List />
      </div>
    </div>
  );
};

export default Home;
