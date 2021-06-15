import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Preloader from '../layout/Preloader';
import useInfinteScroll from '../../hooks/useInfinteScroll';

const UserList = () => {
  const [page, setPage] = useState(1);
  // const [userList, setUserList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(false);

  const { userList, hasMore, isLoading } = useInfinteScroll(page);

  const observer = useRef();
  const lastUserElementRef = useCallback(
    node => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevPage => prevPage + 1);
          console.log('Visible');
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <UserListContainer>
      <UserCardContainer>
        {userList.map(user => (
          <UserCard key={user.id}>
            <img
              alt="유저프로필"
              src={user.profile_img}
              className="relative-image circle"
            />
            <h4>{user.name}</h4>
            <p>{user.phone_number}</p>
          </UserCard>
        ))}
      </UserCardContainer>
      <div ref={lastUserElementRef} className="last-item">
        {isLoading && <Preloader />}
      </div>
    </UserListContainer>
  );
};
export default UserList;

const UserListContainer = styled.div`
  position: relative;
  width: 1096px;
  margin: 0 auto;

  .last-item {
    position: absolute;
    bottom: 10%;
    left: 50%;
  }
`;

const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 260px;
  margin-bottom: 50px;
  padding: 8px 0;
  background-color: #fff;
  box-shadow: 2px 2px 4px grey;
`;
