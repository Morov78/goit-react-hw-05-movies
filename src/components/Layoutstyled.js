import { NavLink } from 'react-router-dom';
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
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;
