import React, { useState } from 'react';

const INITIAL_PROJECT_INPUT = {
  title: '',
  content: '',
};

export default function CreateProject() {
  const [projectInput, setProjectInput] = useState({
    INITIAL_PROJECT_INPUT,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setProjectInput({ ...projectInput, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(projectInput);
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>

        <div className="input-field">
          <label htmlFor="text">Title</label>
          <input type="text" id="title" onChange={e => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={e => handleChange(e)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}
