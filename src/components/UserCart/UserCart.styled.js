import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 20px;
  padding: 0 16px;

  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 2560px) {
    padding: 0;
  }
`;
