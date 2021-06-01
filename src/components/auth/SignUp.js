import React, { useState } from 'react';

const INITIAL_SIGNUP_INPUT = {
  name: '',
  email: '',
  password: '',
};

export default function SignUp() {
  const [signUpInput, setSignUpInput] = useState({
    INITIAL_SIGNUP_INPUT,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setSignUpInput({ ...signUpInput, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(signUpInput);
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="text">Name</label>
          <input type="text" id="name" onChange={e => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
}
