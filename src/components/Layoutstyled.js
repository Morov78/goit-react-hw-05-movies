import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #010101;
  font-size: 20px;
`;

export const Nav = styled.nav`
  padding: 15px;
  display: flex;
  gap: 20px;
  border-bottom: 3px solid #e9e9e9;

  a {
    text-decoration: none;
    color: black;

    &.active {
      color: orange;
      text-decoration: underline;
    }
    &:not(active):hover,
    &:not(active):focus {
      text-decoration: underline;
    }
  }
`;
