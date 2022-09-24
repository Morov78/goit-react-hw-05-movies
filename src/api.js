import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '092bcb29ccd47efc5792e9a4733d23fe';

async function fetchMovies() {
  // eslint-disable-next-line no-undef
  const responce = await axios(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return responce;
}
async function fetchMoviesById(id) {
  const responce = await axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return responce;
}
async function fetchMovieCredits(id) {
  const responce = await axios(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return responce;
}
async function fetchMovieReviews(id) {
  const responce = await axios(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return responce;
}

export { fetchMovies, fetchMoviesById, fetchMovieCredits, fetchMovieReviews };
