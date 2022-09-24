import { List, StyledLink } from './Home.styled';
import { VscCircleFilled } from 'react-icons/vsc';

export const Home = ({ movies }) => {
  if (!movies) {
    return;
  }
  return (
    <main style={{ marginLeft: '15px' }}>
      <h1>Trending today</h1>
      <List>
        {movies.map(({ id, name, title, media_type }) => (
          <StyledLink to={`/movies:${id}`} state={{ from: '/', id }} key={id}>
            <VscCircleFilled size="14px" />
            {name || title}
          </StyledLink>
        ))}
      </List>
    </main>
  );
};
