import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { authService, firebaseInstance } from '../fbase';

const INITIAL_LOGIN_INPUT = {
  email: '',
  password: '',
};

const Auth = () => {
  const [loginInput, setLoginInput] = useState(INITIAL_LOGIN_INPUT);
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');

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
      if (newAccount) {
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
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount(prev => !prev);

  const onSocialClick = async event => {
    const { name } = event.target;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
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
            value={newAccount ? 'Create Account' : 'Login'}
            className="btn pink lighten-1 z-depth-0"
          />
        </div>
        <p>{error}</p>
        <span onClick={toggleAccount}>
          {newAccount ? 'Login' : 'Create Account'}
        </span>
        <div>
          <button
            onClick={onSocialClick}
            name="google"
            className="btn pink lighten-1 z-depth-0"
          >
            Continue with Google
          </button>
          <button
            onClick={onSocialClick}
            name="github"
            className="btn pink lighten-1 z-depth-0"
          >
            Continue with Github
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
