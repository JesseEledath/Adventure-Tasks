import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
function Form(props) {
  const [task, setTask] = useState("");
  const [exp, setExp] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (props.tasks.length > 0 && params.id) {
      const foundTask = props.tasks.find((task) => params.id === task.id);
      if (foundTask) {
        setTask(foundTask.fields.task);
        setExp(foundTask.fields.exp);
        setDescription(foundTask.fields.description);
      }
    }
  }, [props.tasks, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      task,
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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
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
      <button type="submit">Submit Task</button>
    </form>
  );
}

export default Form;
