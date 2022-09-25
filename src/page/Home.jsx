import { MovieList } from 'components/MovieList/MovieList';

export const Home = ({ movies }) => {
  return (
    <main style={{ marginLeft: '15px' }}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};
