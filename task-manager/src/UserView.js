import React from "react";
import TaskList from "./TaskList";

function UserView({ tasks, users }) {
  return (
    <div>
      <h2>User Tasks</h2>
      {users.map((user) => (
        <div key={user._id}>
          <h3>{user.name}</h3>
          <TaskList
            tasks={tasks.filter((task) => task.assignedTo === user._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default UserView;
