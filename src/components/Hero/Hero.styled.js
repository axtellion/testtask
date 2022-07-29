import styled from 'styled-components';
import tellBg from '../../img/tell-bg.png';
import tableBg from '../../img/table_bg.png';
import descBg from '../../img/deck_bg.png';
import ultraBg from '../../img/ultra_bg_2560.png';

export const HeroBg = styled.div`
  width: 100%;
  background-image: url(${tellBg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${tableBg});
  }
  @media screen and (min-width: 1024px) {
    background-image: url(${descBg});
  }
  @media screen and (min-width: 2560px) {
    background-image: url(${ultraBg});
  }
`;

export const HeroBox = styled.div`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 71px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-bottom: 88px;
    padding-left: 194px;
    padding-right: 194px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 164px;
    padding-bottom: 163px;
    padding-left: 322px;
    padding-right: 322px;
  }
  @media screen and (min-width: 2560px) {
    padding-left: 395px;
    padding-right: 395px;
  }
`;

export const HeroWrap = styled.div`
  color: ${p => p.theme.colors.white};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 21px;

  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
  width: 296px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }
`;
