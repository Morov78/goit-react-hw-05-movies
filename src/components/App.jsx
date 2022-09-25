import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { MovieItemCast } from './MovieItem/MovieItemCast/MovieItemCast';
import { MovieItemReviews } from './MovieItem/MovieItemReviews/MovieItemReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
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
