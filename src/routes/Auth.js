import React from 'react';
import { authService, firebaseInstance } from '../fbase';
import AuthForm from 'components/auth/AuthForm';

const Auth = () => {
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
      <AuthForm />
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
    </div>
  );
};
export default Auth;
