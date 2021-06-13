import React, { useState, useEffect } from 'react';
import { dbService } from '../fbase';
import Sweet from '../components/Sweet';
import MessageForm from '../components/message/MessageForm';
import Pagination from '../components/Pagination';

const Home = ({ userObj }) => {
  const [sweets, setSweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sweetsPerPage, setSweetsPerPage] = useState(10);

  useEffect(() => {
    dbService.collection('Sweets').onSnapshot(snapshot => {
      const sweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSweets(sweetArray);
    });
  }, []);

  const indexOfLast = currentPage * sweetsPerPage;
  const indexOfFirst = indexOfLast - sweetsPerPage;
  const currentSweets = tmp => {
    let currentSweets = 0;
    currentSweets = tmp.slice(indexOfFirst, indexOfLast);
    return currentSweets;
  };

  return (
    <div className="container">
      <MessageForm userObj={userObj} />
      <div>
        {currentSweets(sweets).map(sweet => (
          <Sweet
            key={sweet.id}
            sweetObj={sweet}
            isOwner={sweet.creatorId === userObj.uid}
          />
        ))}

        <Pagination
          sweetsPerPage={sweetsPerPage}
          totalPosts={sweets.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
