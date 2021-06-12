import React, { useState, useEffect } from 'react';
import { dbService } from '../fbase';
import Sweet from '../components/Sweet';
import Form from '../components/message/Form';

const Home = ({ userObj }) => {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    dbService.collection('Sweets').onSnapshot(snapshot => {
      const sweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSweets(sweetArray);
    });
  }, []);

  return (
    <div className="container">
      <Form userObj={userObj} />
      <div>
        {sweets.map(sweet => (
          <Sweet
            key={sweet.id}
            sweetObj={sweet}
            isOwner={sweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
