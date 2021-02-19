import React from "react";
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
// Function ======================================
function TaskInfo(props) {
  // States ======================================
  const params = useParams();
  const history = useHistory();
  // Delete =======================================
  const handleDelete = async () => {
    const taskURL = `${baseURL}/${found.id}`;
    await axios.delete(taskURL, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };
  const found = props.tasks.find((task) => task.id === params.id);
  
  // Rendering =================================================
  if (!found) {
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <h3>{found.fields.title}</h3>
      <h3>{found.fields.exp} exp</h3>
      <h4>{found.fields.description}</h4>
      <h4>Made by {found.fields.user} </h4>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskInfo;
