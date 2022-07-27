import styled from 'styled-components';

export const Item = styled.li`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  padding: 20px;

  background-color: ${p => p.theme.colors.white};
  width: 100%;
`;

export const Text = styled.p`
  text-align: center;
`;

export const UserFoto = styled.img`
  border-radius: 50%;
`;
