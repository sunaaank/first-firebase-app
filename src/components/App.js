import React, { useState, useEffect } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserObj(user);
        console.log('app>useEffect>user', userObj);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        'Initializing...'
      )}
    </>
  );
}

export default App;
