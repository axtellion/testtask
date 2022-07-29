import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;

  gap: 20px;
  padding: 20px;

  background-color: ${p => p.theme.colors.white};
  width: 328px;
  @media screen and (min-width: 768px) {
    width: 344px;
  }
  @media screen and (min-width: 1024px) {
    width: 282px;
  }
  @media screen and (min-width: 2560px) {
    width: 370px;
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const UserFoto = styled.img`
  border-radius: 50%;
`;
