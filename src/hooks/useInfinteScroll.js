import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useInfinteScroll(page) {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'GET',
      url: 'https://node-pagnation.herokuapp.com/users',
      params: { limit: 10, offset: page * 10 },
    })
      .then(res => {
        setUserList(prevUserList => {
          return [...new Set([...prevUserList, ...res.data.users])];
        });
        console.log('setUserList', userList);
        setHasMore(res.data.users.length > 0);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, [page]);
  return { userList, hasMore, isLoading };
}
