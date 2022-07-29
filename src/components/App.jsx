import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Hero } from './Hero/Hero';
// import { UserForm } from './UserForm/UserForm';
import { Users } from './Users/Users';
import { Container } from './App.styled';

export const App = () => {
  return (
    <div>
      <Container>
        <AppBar />

        <Hero />
        <Users />
        {/* <UserForm /> */}
      </Container>
      <GlobalStyle />
    </div>
  );
};
