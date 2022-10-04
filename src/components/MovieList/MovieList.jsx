import { List, StyledLink } from './MovieList.styled';
import { VscCircleFilled } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const { pathname, search } = location;

  return (
    <List>
      {movies &&
        movies.map(({ id, name, title }) => (
          <StyledLink
            to={`/movies/${id}`}
            state={{ from: { pathname, search } }}
            key={id}
          >
            <VscCircleFilled size="14px" />
            {name || title}
          </StyledLink>
        ))}

      {search !== '' && movies.length === 0 && (
        <p>No found movies on this query</p>
      )}
    </List>
  );
};

MovieList.prototype = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
