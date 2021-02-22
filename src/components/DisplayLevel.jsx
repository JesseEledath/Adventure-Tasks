import React, { useEffect, useState } from "react";
import DisplayedTasks from "./DisplayedTasks";

function DisplayLevel(props) {
  // States =====================================
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  // UseEffect ==================================
  useEffect(
    () => {
      const expArray = [100, 210, 320, 400, 520, 630, 730, 840, 960];
      const newLevel = expArray.findIndex((expLevel) => expLevel > exp) + 1;
      setLevel(newLevel);
    },
    [exp],
    [level]
  );

  // Render ======================================
  return (
    <div>
      <div className="level-info">
        <h2>Level {level}</h2>
        <h3>Current {exp}</h3>
      </div>
      <div className="mapped-tasks">
        <DisplayedTasks
          tasks={props.tasks}
          setToggleFetch={props.setToggleFetch}
          setExp={setExp}
          currentExp={exp}
        />
      </div>
    </div>
  );
}

export default DisplayLevel;
