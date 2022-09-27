import { fetchSearchMovie } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Suspense, useEffect } from 'react';
import { useState } from 'react';

import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleSubmit = searchQuery => {
    if (searchQuery !== '' && searchQuery !== query) {
      setSearchParams({ query: searchQuery });
      setMovies([]);
      setIsLoading(false);
      window.sessionStorage.setItem('searchQuery', JSON.stringify(searchQuery));
    }
  };

  useEffect(() => {
    if (!query) {
      const searchQuery = JSON.parse(
        window.sessionStorage.getItem('searchQuery')
      );

      if (searchQuery) {
        setSearchParams({ query: searchQuery });

        const storageMovies = JSON.parse(
          window.sessionStorage.getItem('searchMovies')
        );
        setMovies(storageMovies);
      }

      return;
    }
    if (movies.length !== 0) {
      setIsLoading('resolved');
      return;
    }
    setIsLoading('pending');

    fetchSearchMovie(query)
      .then(data => {
        setMovies(data.data.results);

        window.sessionStorage.setItem(
          'searchMovies',
          JSON.stringify(data.data.results)
        );
        if (data.data.total_result === 0) {
          setIsLoading('rejected');
          setSearchParams({ query: '' });
          setMovies([]);

          return;
        }
        setIsLoading('resolved');
      })
      .catch(error => console(error));
  }, [query, movies, setSearchParams, isLoading]);

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {isLoading === 'pending' && <Loader />}
      {isLoading === 'resolved' && <MovieList movies={movies} />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
