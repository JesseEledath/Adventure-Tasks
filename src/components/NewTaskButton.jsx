import React from "react";
import { Link } from "react-router-dom";

function NewTaskHandle(props) {
  return (
    <div >
      <Link to="/new">
        <button type="button" className="new-task-button">New Task?</button>
      </Link>
    </div>
  );
}

export default NewTaskHandle;
