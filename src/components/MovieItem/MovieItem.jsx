import { fetchMovieById } from 'services/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

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
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLocation = useRef(location.state.from);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log(id);
    fetchMovieById(movieId).then(data => {
      setMovie(data.data);
    });
  }, [movieId]);

  const getParamByMovie = () => {
    const pathImage = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : placeholder;
    const votePercentage = Math.round(movie.vote_average * 10);
    const releaseDate = new Date(movie.release_date);
    const releaseYear = releaseDate.getFullYear() || 'No data';
    const genres =
      movie.genres.map(genre => genre.name).join(' ') || 'No genres';

    return { pathImage, votePercentage, releaseYear, genres };
  };

  if (!movie) {
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
          <AtomImage src={pathImage} alt={movie.title} placeholder={spinner} />
        </Placeholder>

        <div>
          <h2>
            {movie.title} ({releaseYear})
          </h2>
          <p>User Score: {votePercentage}%</p>
          <h3> Overview</h3>
          <p>{movie.overview || 'No data'}</p>
          <h3> Genres</h3>
          <p>{genres}</p>
        </div>
      </Box>

      <BoxInfo>
        <h3>Additional information</h3>
        <StyledLink to="cast" state={{ from: backLocation.current }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backLocation.current }}>
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
