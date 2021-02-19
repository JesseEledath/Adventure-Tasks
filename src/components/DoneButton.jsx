import React from 'react';

function DoneButton(props) {
  function doneHandle(e) {
    
  }
  return (
    <div className ="done-button">
      <button type="button" onClick={doneHandle}>JOB DONE</button>
    </div>
  );
}

export default DoneButton;