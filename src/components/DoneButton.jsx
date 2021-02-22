import React from "react";
import { baseURL, config } from "../services";
import axios from "axios";

function DoneButton(props) {
  // Handle function ========================
  const handleDone = async () => {
    props.setExp(props.currentExp + props.exp);
    const taskURL = `${baseURL}/${props.id}`;
    await axios.delete(taskURL, config);
    props.setToggleFetch((curr) => !curr);
  };

  // Render ============================
  return (
    <button type="button" className="done-button" onClick={handleDone}>
      JOB DONE
    </button>
  );
}

export default DoneButton;
