import { fetchMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');

    fetchMovies().then(responce => {
      setMovies(responce.data.results);
    });
  }, []);

  return (
    <main style={{ marginLeft: '15px' }}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};
