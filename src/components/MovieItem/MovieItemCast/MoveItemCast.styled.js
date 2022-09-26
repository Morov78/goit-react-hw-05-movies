import styled from 'styled-components';

export const Placeholder = styled.div`
  width: 140px;
  height: 210px;
  display: flex;
  justify-content: center;

  & figure {
    margin: 0;
    background-size: 140px 210px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & img {
    width: 140px;
    height: 210px;
  }
`;

export const List = styled.ul`
  padding-left: 15px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  gap: 10px 5px;

  & h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  & p {
    font-size: 14px;
  }
`;
