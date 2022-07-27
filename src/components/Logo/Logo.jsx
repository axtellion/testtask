import { Box } from 'components/Box';
import logo from '../../img/logo.svg';
import { LogoText } from './Logo.styled';

export const Logo = ({ textLogo }) => {
  return (
    <Box display="flex" alignContent="center" width="104px" height="26px">
      <img src={logo} alt="logo" />
      <LogoText>{textLogo}</LogoText>
    </Box>
  );
};
