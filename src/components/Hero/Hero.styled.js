import styled from 'styled-components';
import tellBg from '../../img/tell-bg.png';

export const HeroBg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${tellBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeroBox = styled.div`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 71px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
`;

export const HeroWrap = styled.div`
  color: ${p => p.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 21px;

  margin-bottom: 32px;
`;

export const Title = styled.h1`
  margin: 0 auto;
  width: 296px;
`;
