import React from "react";
import TaskList from "./TaskList";

function AllUsersView({ tasks, users }) {
  return (
    <div>
      <h2>All User Tasks</h2>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default AllUsersView;
