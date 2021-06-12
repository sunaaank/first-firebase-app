import React, { useState } from 'react';
import { authService } from '../../fbase';

const INITIAL_LOGIN_INPUT = {
  email: '',
  password: '',
};

const AuthForm = () => {
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

  return (
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
      <button onClick={toggleAccount} className="btn black lighten-1 z-depth-0">
        {newAccount ? 'Login' : 'Create Account'}
      </button>
    </form>
  );
};

export default AuthForm;
