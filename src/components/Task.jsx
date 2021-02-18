import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
function Task(props) {
  const handleDelete = async () => {
    const reviewURL = `${baseURL}/${props.task.id}`;
    await axios.delete(reviewURL, config);
    props.setToggleFetch((curr) => !curr);
  };
  const { task, exp, description, user } = props.task.fields;
  return (
    <div>
      <Link to= "/:id">
        <div className= "task-container">
          <h3>{task}</h3>
          <h3>{exp}</h3>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </Link>
      <Route path="/:id">
      <h3>{task}</h3>
      <h3>{exp}</h3>
      <h4>{description}</h4>
      <h4>Made by {user} </h4>
      <button onClick={handleDelete}>Delete</button>
      </Route>
    </div>
  );
}

export default Task;
