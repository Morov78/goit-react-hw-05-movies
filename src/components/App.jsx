import { fetchMovies } from 'api';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieItemCast } from './MovieItem/MovieItemCast/MovieItemCast';
import { MovieItemReviews } from './MovieItem/MovieItemReviews/MovieItemReviews';

export const App = () => {
  const [dataMovies, setDataMovies] = useState(null);

  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');

    fetchMovies().then(responce => {
      setDataMovies(responce.data.results);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={dataMovies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies:movieid" element={<MovieItem />}>
            <Route path="cast" element={<MovieItemCast />} />
            <Route path="reviews" element={<MovieItemReviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
