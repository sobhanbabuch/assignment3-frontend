import React from "react";
import TaskManager from "./components/TaskManager";
import UserContext from "./context/UserContext";

const App = () => {
  const user = { name: "sobhan babu", id: 1 }; // Simulated user data
  return (
    <UserContext.Provider value={user}>
      <TaskManager />
    </UserContext.Provider>
  );
};

export default App;
