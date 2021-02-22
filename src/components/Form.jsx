import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
// Function =============================================
function Form(props) {
  // States =============================================
  const [title, setTitle] = useState("");
  const [exp, setExp] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();
  const params = useParams();
  // UseEffect ============================================
  useEffect(() => {
    if (props.tasks.length > 0 && params.id) {
      const foundTask = props.tasks.find((task) => params.id === task.id);
      if (foundTask) {
        setTitle(foundTask.fields.title);
        setExp(foundTask.fields.exp);
        setDescription(foundTask.fields.description);
        setUser(foundTask.fields.user);
      }
    }
  }, [props.tasks, params.id]);
  // Handle function =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      exp,
      description,
      user,
    };
    if (params.id) {
      const taskURL = `${baseURL}/${params.id}`;
      await axios.put(taskURL, { fields }, config);
    } else {
      await axios.post(baseURL, { fields }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };
  // Rendering ==================================
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="exp">Experince value of task: </label>
      <input
        id="exp"
        type="number"
        value={exp}
        onChange={(e) => setExp(e.target.valueAsNumber)}
      />
      <label htmlFor="description">Description of task: </label>
      <textarea
        id="description"
        type="textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="user">What is your name? </label>
      <input
        id="user"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="submit" className="submit-button">
        {params.id ? "Change" : "Submit"}
      </button>
    </form>
  );
}

export default Form;
