import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

function App() {
  console.log('유저누구니', authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
