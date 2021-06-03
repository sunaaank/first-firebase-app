import React, { useState } from 'react';

const INITIAL_LOGIN_INPUT = {
  email: '',
  password: '',
};

const Auth = () => {
  const [loginInput, setLoginInput] = useState({
    INITIAL_LOGIN_INPUT,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    console.log(loginInput);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>

        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
        <div>
          <button className="btn pink lighten-1 z-depth-0">
            Continue with Google
          </button>
          <button className="btn pink lighten-1 z-depth-0">
            Continue with Github
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
