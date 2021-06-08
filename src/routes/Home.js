import React, { useState, useEffect } from 'react';
import { dbService } from '../fbase';
import Sweet from '../components/Sweet.js';

const Home = ({ userObj }) => {
  const [sweet, setSweet] = useState('');
  const [sweets, setSweets] = useState([]);
  // not realtime
  // const getSweets = async () => {
  //   const dbSweets = await dbService.collection('Sweets').get();
  //   dbSweets.forEach(document => {
  //     const sweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setSweets(prev => [sweetObject, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getSweets();
    // realtime
    dbService.collection('Sweets').onSnapshot(snapshot => {
      const sweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSweets(sweetArray);
    });
  }, []);

  const onSubmit = async e => {
    console.log('작동해라');
    e.preventDefault();
    await dbService
      .collection('Sweets')
      .add({
        content: sweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
    setSweet('');
  };

  const onChange = event => {
    const {
      target: { value },
    } = event;
    setSweet(value);
  };

  return (
    <div className="container">
      <form className="white" onSubmit={onSubmit}>
        <div className="input-field">
          <input
            value={sweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
          />
        </div>
        <input
          type="submit"
          value="Sweet"
          className="btn pink lighten-1 z-depth-0"
        />
      </form>
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
