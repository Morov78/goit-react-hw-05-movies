import { List, StyledLink } from './MovieList.styled';
import { VscCircleFilled } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  if (!movies) {
    return;
  }
  const { pathname, search } = location;
  console.log(pathname, search);
  return (
    <List>
      {movies.map(({ id, name, title }) => (
        <StyledLink
          to={`/movies:${id}`}
          state={{ from: { pathname, search }, id }}
          key={id}
        >
          <VscCircleFilled size="14px" />
          {name || title}
        </StyledLink>
      ))}
    </List>
  );
};
