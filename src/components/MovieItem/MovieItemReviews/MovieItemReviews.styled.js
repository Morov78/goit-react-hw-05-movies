import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 15px;
  margin-bottom: 20px;
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
