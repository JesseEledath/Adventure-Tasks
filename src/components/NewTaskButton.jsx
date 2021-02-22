import React from "react";
import { Link } from "react-router-dom";

function NewTaskHandle(props) {
  return (
    <div className="new-task-button">
      <Link to="/new">
        <button type="button">New Task?</button>
      </Link>
    </div>
  );
}

export default NewTaskHandle;
