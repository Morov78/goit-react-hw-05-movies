import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLinkBack = styled(NavLink)`
  display: block;
  margin-right: auto;
  text-decoration: none;
  color: #000000;
  :hover {
    color: blue;
    text-decoration: underline;
  }
`;
export const StyledLink = styled(NavLink)`
  display: block;
  margin-right: auto;
  text-decoration: none;
  color: #000000;

  :hover {
    color: blue;
    text-decoration: underline;
  }

  &.active {
    color: blue;
    text-decoration: underline;
  }
`;

export const Box = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 200px 1fr;
  border-bottom: 3px solid #e9e9e9;

  & img {
    display: block;
    width: 200px;
    height: 300px;
  }
  & h2 {
    margin-bottom: 30px;
  }
  & h3,
  p {
    margin-bottom: 15px;
  }
`;

export const BoxInfo = styled.ul`
  display: flex;
  gap: 4px;
  padding-bottom: 15px;
  flex-direction: column;
  border-bottom: 3px solid #e9e9e9;
`;
