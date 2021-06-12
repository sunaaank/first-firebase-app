import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        if (!user.displayName) {
          user.updateProfile({
            displayName: user.email.split('@')[0],
          });
        }
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: args => user.updateProfile(args),
        });
        console.log('app>useEffect>user', userObj);
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: args => user.updateProfile(args),
    });
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
