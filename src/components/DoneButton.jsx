import React from 'react';

function DoneButton(props) {
// Handle function ========================
  const handleDone = async (e) => {
    
  }
// Render ============================
  return (
    <div className ="done-button">
      <button type="button" onClick={handleDone}>JOB DONE</button>
    </div>
  );
}

export default DoneButton;