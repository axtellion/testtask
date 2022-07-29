import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { UserCart } from 'components/UserCart/UserCart';
import { useState, useEffect } from 'react';
import { fetchUsers } from '../../services/api';
import { Title } from './Users.styled';

export const Users = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const cartUsers = fetchUsers(1);

    cartUsers.then(res => setUser([...res]));
  }, []);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    const nextCart = fetchUsers(page);
    nextCart.then(res => setUser(prevState => [...prevState, ...res]));
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Box bg="#E5E5E5" pt="140px">
      <Title>Working with GET request</Title>
      <UserCart users={user} />
      <Box display="flex" justifyContent="center">
        <Button text={'Show more'} onClick={loadMore} />
      </Box>
    </Box>
  );
};
