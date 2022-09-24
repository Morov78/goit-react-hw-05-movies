import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Nav } from './Layoutstyled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>
      <Outlet />
    </Container>
  );
};
