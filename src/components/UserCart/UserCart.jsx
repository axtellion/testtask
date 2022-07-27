import { UserDetails } from 'components/UserDetails/UserDetaild';
import { List } from './UserCart.styled';

export const UserCart = ({ users }) => {
  return (
    <List>
      {users.map(({ email, id, name, phone, photo, position }) => (
        <UserDetails
          key={id}
          email={email}
          name={name}
          phone={phone}
          photo={photo}
          position={position}
        />
      ))}
    </List>
  );
};
