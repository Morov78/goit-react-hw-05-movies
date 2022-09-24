import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
import { StyledLink, Container, Nav } from './Layoutstyled';
export const App = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route index element={<Home />} /> */}
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Container>
  );
};

// Маршрути
// У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
