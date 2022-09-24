import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  ${'' /* height: 100vh; */}
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 40;
  color: #010101;
  padding: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;
