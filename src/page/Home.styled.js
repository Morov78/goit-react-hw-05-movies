import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 20px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-top: 15px;
  list-style-type: upper-roman;
  list-style-position: inside;
`;

export const StyledLink = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  margin-right: auto;
  outline: none;
  display: flex;
  gap: 4px;
  align-items: center;

  :hover,
  :focus {
    color: blue;
    text-decoration: underline;
  }
`;
