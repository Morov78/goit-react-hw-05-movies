import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieItem = lazy(() => import('./MovieItem/MovieItem'));
const MovieItemCast = lazy(() =>
  import('./MovieItem/MovieItemCast/MovieItemCast')
);
const MovieItemReviews = lazy(() =>
  import('./MovieItem/MovieItemReviews/MovieItemReviews')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<MovieItemCast />} />
            <Route path="reviews" element={<MovieItemReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
