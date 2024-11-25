import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import TaskForm from "./TaskForm"; // Import TaskForm
import TaskList from "./TaskList"; // Import TaskList
import TaskStats from "./TaskStats"; // Import TaskStats

const TaskManager = () => {
  const user = useContext(UserContext);

  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  return (
    <div>
      <h1>{user.name}'s Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskStats tasks={tasks} />
    </div>
  );
};

export default TaskManager;
