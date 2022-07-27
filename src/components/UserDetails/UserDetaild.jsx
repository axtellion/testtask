import { Box } from 'components/Box';
import { Item, Text, UserFoto } from './UserDetaild.styled';

export const UserDetails = ({ email, id, name, phone, photo, position }) => {
  return (
    <>
      <Item key={id}>
        <UserFoto src={photo} alt="User" />
        <Text>{name}</Text>
        <Box>
          <Text>{position}</Text>
          <Text>{email}</Text>
          <Text>{phone}</Text>
        </Box>
      </Item>
    </>
  );
};
