import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Hero } from './Hero/Hero';
import { UserForm } from './UserForm/UserForm';
import { Users } from './Users/Users';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Hero />
      <Users />
      <UserForm />
      <GlobalStyle />
    </div>
  );
};
