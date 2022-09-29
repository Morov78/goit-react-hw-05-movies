import { fetchMovieByQuery } from 'services/api';
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
      }

      return;
    }
    setIsLoading('pending');
    fetchMovieByQuery(query).then(data => {
      setMovies(data.data.results);
      setIsLoading('resolved');
    });
  }, [query, setSearchParams]);

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
