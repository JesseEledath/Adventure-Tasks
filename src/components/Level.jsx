import React, { useEffect, useState } from "react";

function Level(props) {
  // States =====================================
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);
  // UseEffect ==================================
  useEffect(() => {
    switch (exp) {
      case exp >= 100:
        setLevel(2);
        break;
      case exp >= 210:
        setLevel(3);
        break;
      case exp >= 320:
        setLevel(4);
        break;
      case exp >= 400:
        setLevel(5);
        break;
      case exp >= 520:
        setLevel(6);
        break;
      case exp >= 630:
        setLevel(7);
        break;
      case exp >= 730:
        setLevel(8);
        break;
      case exp >= 840:
        setLevel(9);
        break;
      case exp >= 960:
        setLevel(10);
        break;
      default:
        break;
    }
  }, [exp]);
  // Functions ==================================
  function name(params) {}
  // Render ======================================
  return (
    <div>
      <h3>{level}</h3>
      <h2>{exp}</h2>
    </div>
  );
}

export default Level;
