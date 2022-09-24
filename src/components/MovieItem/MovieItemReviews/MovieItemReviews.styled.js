import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h3 {
    margin-bottom: 8px;
  }
  & p {
    font-size: 16px;
  }
`;
