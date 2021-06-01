import React, { useState } from 'react';

const INITIAL_LOGIN_INPUT = {
  name: '',
  password: '',
};

export default function SignIn() {
  const [loginInput, setLoginInput] = useState({
    INITIAL_LOGIN_INPUT,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setLoginInput({ ...loginInput, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginInput);
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>

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
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}
