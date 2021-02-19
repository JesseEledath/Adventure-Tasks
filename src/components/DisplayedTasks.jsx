import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditButton from "./EditButton";
import DoneButton from "./DoneButton"
// Main Function ===============================
function DisplayedTasks(props) {
  // State for ID ====================================
  const [id, setId] = useState("")
  // Handle function ================================
  const handleId = () => {
  
}
  // Render ====================================
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id} className="task-contianer">
          <Link to={`/task/${task.id}`}>
            <h3>{task.fields.title}</h3>
            <h3>{task.fields.exp} exp</h3>
          </Link>
          <EditButton id={id} />
          <DoneButton />
        </div>
      ))}
    </div>
  );
}

export default DisplayedTasks;
