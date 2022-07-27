import styled from 'styled-components';

export const Btn = styled.button`
  min-width: 100px;
  min-height: 34px;
  padding: 4px 21px;
  border-radius: 80px;
  font-size: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.primary};

  border: none;
  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
  :disabled {
    background-color: #b4b4b4;
    color: ${p => p.theme.colors.white};
  }
`;
