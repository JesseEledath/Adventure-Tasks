import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import DoneButton from "./components/DoneButton";
import EditButton from "./components/EditButton";
import Form from "./components/Form";
import Level from "./components/Level";
import MobileHamburger from "./components/MobileHamburger";
import NewTaskButton from "./components/NewTaskButton";
import Task from "./components/Task";
function App() {
  const [toggleFetch, setToggleFetch] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const resp = await axios.get(baseURL, config);
      setTasks(resp.data.records);
    };
    getTasks();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="reviews-container">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setToggleFetch={setToggleFetch}
            />
          ))}
        </div>
      </Route>
      <Route path="/new" >
        <Form tasks={tasks} setToggleFetch={ setToggleFetch}/>
      </Route>
      <Route path="/edit/:id">
        <Form tasks={tasks} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
