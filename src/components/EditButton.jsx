import React from 'react';
import { Link } from 'react-router-dom';

function EditButton(props) {
  const editHandle = e => this.tasks(e.currentTarget.id);
  
  return (
    <div className="edit-button">
      <Link to = {`/edit/${editHandle}`} >
        <button type="button" >Edit</button>
        </Link>
    </div>
  );
}

export default EditButton;