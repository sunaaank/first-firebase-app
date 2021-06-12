import React, { useState, useEffect } from 'react';
import { authService, dbService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push('/');
  };

  const getMySweets = async () => {
    const sweets = await dbService
      .collection('Sweets')
      .where('creatorId', '==', userObj.uid)
      .orderBy('createdAt')
      .get();
    console.log(sweets.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    getMySweets();
  }, []);

  const onChange = e => {
    const { value } = e.target;
    setNewDisplayName(value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      const response = await userObj.updateProfile({
        displayName: newDisplayName,
      });
    }
    setNewDisplayName('');
    refreshUser();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
      <p>{userObj.displayName}의 프로필</p>
    </>
  );
};
export default Profile;
