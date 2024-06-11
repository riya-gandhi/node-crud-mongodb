import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import UserView from "./UserView";
import AllUsersView from "./AllUsersView.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchUsers();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AllUsersView tasks={tasks} users={users} />
      <UserView tasks={tasks} users={users} />
    </div>
  );
}

export default App;
