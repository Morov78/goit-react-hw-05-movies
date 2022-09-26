import { fetchMoviesById } from 'api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Section,
  StyledLinkBack,
  StyledLink,
  Box,
  BoxInfo,
} from './MovieItem.styled';
import { TiArrowBack } from 'react-icons/ti';
import { Loader } from 'components/Loader/Loader';

const MovieItem = data => {
  const [movieId, setMovieId] = useState(null);

  const location = useLocation();
  const backLocation = useRef(location.state.from);
  const id = location.state.id;

  useEffect(() => {
    fetchMoviesById(id).then(data => {
      setMovieId(data.data);
    });
  }, [id]);

  if (!movieId) {
    return;
  }

  const pathImage = `https://image.tmdb.org/t/p/w500/${movieId.poster_path}`;
  const votePercentage = Math.round(movieId.vote_average * 10);
  const releaseDate = new Date(movieId.release_date);
  const releaseYear = releaseDate.getFullYear();
  const genres = movieId.genres.map(genre => genre.name).join(' ');

  return (
    <Section>
      <StyledLinkBack to={backLocation.current}>
        <TiArrowBack size="20" />
        Go back
      </StyledLinkBack>

      <Box>
        <img src={pathImage} alt={movieId.title} loading="lazy" />
        <div>
          <h2>
            {movieId.title} ({releaseYear})
          </h2>
          <p>User Score: {votePercentage}%</p>
          <h3> Overview</h3>
          <p>{movieId.overview}</p>
          <h3> Genres</h3>
          <p>{genres}</p>
        </div>
      </Box>

      <BoxInfo>
        <h3>Additional information</h3>
        <StyledLink to="cast" state={{ from: { backLocation }, id: id }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: { backLocation }, id: id }}>
          Reviews
        </StyledLink>
      </BoxInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default MovieItem;
