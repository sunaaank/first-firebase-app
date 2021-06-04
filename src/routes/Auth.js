import React, { useState } from 'react';
import { authService } from '../fbase';

const INITIAL_LOGIN_INPUT = {
  email: '',
  password: '',
};

const Auth = () => {
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN_INPUT);
  const [newAccout, setNewAccout] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginInput({ ...loginInput, [name]: value });
    console.log(loginInput);
  };

  const handleSubmit = async e => {
    const { email, password } = loginInput;
    e.preventDefault();
    try {
      let data;
      if (newAccout) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // login
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
          <input
            type="submit"
            value={newAccout ? 'Create Account' : 'Login'}
            className="btn pink lighten-1 z-depth-0"
          />
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
