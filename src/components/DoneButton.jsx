import React from 'react';
import { baseURL, config } from "../services";
import axios from "axios";
function DoneButton(props) {
// Handle function ========================
  const handleDone = async (e) => {
    const taskURL = `${baseURL}/${props.id}`;
    await axios.delete(taskURL, config);
    props.setToggleFetch((curr) => !curr);
  }
// Render ============================
  return (
    <div className ="done-button">
      <button type="button" onClick={handleDone}>JOB DONE</button>
    </div>
  );
}

export default DoneButton;