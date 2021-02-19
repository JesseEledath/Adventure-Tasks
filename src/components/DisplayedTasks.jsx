import React from "react";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DoneButton from "./DoneButton"
// Main Function ===============================
function DisplayedTasks(props) {

  // Render ====================================
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id} className="task-contianer">
          <Link to={`/task/${task.id}`}>
            <h3>{task.fields.title}</h3>
            <h3>{task.fields.exp} exp</h3>
          </Link>
          <Link to={`/edit/${task.id}`}>
          <EditButton  />
          </Link>
          <DoneButton />
        </div>
      ))}
    </div>
  );
}

export default DisplayedTasks;
