import { fetchMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
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

export default Home;
