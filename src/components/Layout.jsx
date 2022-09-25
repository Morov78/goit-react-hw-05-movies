import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import { Container, Nav } from './Layoutstyled';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <CustomLink to="/">Home</CustomLink>

          <CustomLink to="/movies">Movies</CustomLink>
        </Nav>
      </header>
      <Outlet />
    </Container>
  );
};
