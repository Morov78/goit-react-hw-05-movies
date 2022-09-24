import { fetchMovies } from 'api';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieItemCast } from './MovieItem/MovieItemCast/MovieItemCast';

export const App = () => {
  const [dataMovies, setDataMovies] = useState(null);
  const fetch = useRef(false);
  useEffect(() => {
    console.log('Mouting phase: same when componentDidMount runs');

    fetchMovies().then(responce => {
      setDataMovies(responce.data.results);
      fetch.current = true;
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={dataMovies} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies:movieid" element={<MovieItem />}>
            <Route path="cast" element={<MovieItemCast />} />
            <Route path="reviews" element={<div>reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
