import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 15px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 10px;

  & img {
    width: 140px;
    height: 210px;
  }

  & img::before {
  }
  & h3 {
    font-size: 16px;
  }
  & p {
    font-size: 12px;
  }
`;
