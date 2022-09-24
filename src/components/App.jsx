import { fetchMovies } from 'api';
import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieItemCast } from './MovieItem/MovieItemCast/MovieItemCast';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '092bcb29ccd47efc5792e9a4733d23fe';

export const App = () => {
  const [dataMovies, setDataMovies] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const responce = await axios(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
      );
      setDataMovies(responce.data.results);
    };
    console.log('Mouting phase: same when componentDidMount runs');

    fetch();
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
