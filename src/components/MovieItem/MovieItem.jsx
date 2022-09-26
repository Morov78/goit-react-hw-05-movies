import { fetchMoviesById } from 'services/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import {
  Section,
  StyledLinkBack,
  StyledLink,
  Box,
  BoxInfo,
  Placeholder,
} from './MovieItem.styled';
import { TiArrowBack } from 'react-icons/ti';
import { Loader } from 'components/Loader/Loader';
import AtomImage from '@s-ui/react-atom-image';
import spinner from '../../images/spinner.svg';
import placeholder from '../../images/placeholder.png';

const MovieItem = () => {
  const [movieId, setMovieId] = useState(null);

  const location = useLocation();
  const backLocation = useRef(location.state.from);
  const id = location.state.id;

  useEffect(() => {
    fetchMoviesById(id).then(data => {
      setMovieId(data.data);
    });
  }, [id]);

  const getParamByMovie = () => {
    const pathImage = movieId.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movieId.poster_path}`
      : placeholder;
    const votePercentage = Math.round(movieId.vote_average * 10);
    const releaseDate = new Date(movieId.release_date);
    const releaseYear = releaseDate.getFullYear() || 'No data';
    const genres =
      movieId.genres.map(genre => genre.name).join(' ') || 'No genres';

    return { pathImage, votePercentage, releaseYear, genres };
  };

  if (!movieId) {
    return;
  }

  const { pathImage, votePercentage, releaseYear, genres } = getParamByMovie();

  return (
    <Section>
      <StyledLinkBack to={backLocation.current}>
        <TiArrowBack size="20" />
        Go back
      </StyledLinkBack>

      <Box>
        <Placeholder>
          <AtomImage
            src={pathImage}
            alt={movieId.title}
            placeholder={spinner}
          />
        </Placeholder>

        <div>
          <h2>
            {movieId.title} ({releaseYear})
          </h2>
          <p>User Score: {votePercentage}%</p>
          <h3> Overview</h3>
          <p>{movieId.overview || 'No data'}</p>
          <h3> Genres</h3>
          <p>{genres}</p>
        </div>
      </Box>

      <BoxInfo>
        <h3>Additional information</h3>
        <StyledLink to="cast" state={{ from: backLocation.current, id: id }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backLocation.current, id: id }}>
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
