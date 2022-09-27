import { fetchMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading('pending');
    fetchMovies()
      .then(responce => {
        setMovies(responce.data.results);
        setIsLoading('resolved');
      })
      .catch(error => console(error));
  }, []);

  return (
    <main style={{ marginLeft: '15px' }}>
      <h1>Trending today</h1>
      {isLoading === 'pending' && <Loader />}
      {isLoading === 'resolved' && <MovieList movies={movies} />}
      {/* <MovieList movies={movies} /> */}
    </main>
  );
};

export default Home;
