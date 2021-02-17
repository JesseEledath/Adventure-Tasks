import React from "react";

function Task(props) {
  function handleDelete(e) {
    
  }
  return (
    <div>
      <h4>Task title</h4>
      <h3>EXP Value</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
