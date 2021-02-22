import React from "react";
import { Link } from "react-router-dom";

function NewTaskHandle(props) {
  return (
    <Link to="/new" className="new-task-link">
      <button type="button" className="new-task-button">
        New Task?
      </button>
    </Link>
  );
}

export default NewTaskHandle;
