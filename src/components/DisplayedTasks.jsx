import React from "react";
import { Link } from "react-router-dom";
function DisplayedTasks(props) {
  // const { task, exp, description, user } = props.task.fields;

  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id} className="task-contianer">
          <Link to={`/${task.id}`}>
            <h3>{task.fields.title}</h3>
            <h3>{task.fields.exp}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DisplayedTasks;
