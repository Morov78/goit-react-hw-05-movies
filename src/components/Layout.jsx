import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import { Container, Nav } from './Layoutstyled';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <CustomLink to="/">Home</CustomLink>

          <CustomLink to="/movies">Movies</CustomLink>
        </Nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
