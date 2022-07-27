import { Logo } from 'components/Logo/Logo';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box';
import { BtnWrap } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="60px"
      px="16px"
    >
      <Logo textLogo={'testtask'} />
      <Box>
        <BtnWrap>
          <Button text={'Users'} />
          <Button text={'Sign Up'} />
        </BtnWrap>
      </Box>
    </Box>
  );
};
