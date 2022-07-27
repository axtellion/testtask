import { useState } from 'react';
import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Hero } from './Hero/Hero';
import { UserForm } from './UserForm/UserForm';
import { Users } from './Users/Users';

export const App = () => {
  const [state, setState] = useState();

  console.log(state);
  return (
    <div>
      <AppBar />
      <Hero />
      <Users img={state} />
      <UserForm onChande={setState} />
      <GlobalStyle />
    </div>
  );
};
