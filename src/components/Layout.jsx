import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { CustomLink } from './CustomLink';
import { Container, Nav, StyledLink } from './Layoutstyled';
import { Loader } from './Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>

          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
