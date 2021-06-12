import React, { useEffect } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const getMySweets = async () => {
    const sweets = await dbService
      .collection('Sweets')
      .where('creatorId', '==', userObj.uid)
      .get();
    console.log(sweets.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    getMySweets;
  }, [sweets]);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
