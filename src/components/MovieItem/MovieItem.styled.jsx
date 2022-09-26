import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Placeholder = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  & figure {
    margin: 0;
    background-size: 200px 300px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & img {
    width: 200px;
    height: 300px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLinkBack = styled(NavLink)`
  padding-left: 15px;
  display: block;
  margin-right: auto;
  text-decoration: none;
  color: #000000;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin-right: auto;
  text-decoration: none;
  color: #000000;

  :hover {
    text-decoration: underline;
  }

  &.active {
    color: orange;
    text-decoration: underline;
  }
`;

export const Box = styled.ul`
  padding-left: 15px;
  padding-bottom: 15px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 200px 1fr;
  border-bottom: 3px solid #e9e9e9;

  ${
    '' /* & img {
    display: block;
    width: 200px;
    height: 300px;
  } */
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
  padding-left: 15px;
  display: flex;
  gap: 4px;
  padding-bottom: 15px;
  flex-direction: column;
  border-bottom: 3px solid #e9e9e9;
`;
