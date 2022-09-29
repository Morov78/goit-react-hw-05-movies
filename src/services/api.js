import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '092bcb29ccd47efc5792e9a4733d23fe';

const fetchAxios = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  params: {
    api_key: API_KEY,
  },
});

//Запит інформації про популярнці фільми за день
async function fetchTrendMovies() {
  try {
    const responce = await fetchAxios('trending/movie/day', {
      params: { page: 1 },
    });
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит інформації про фільм по id
async function fetchMovieById(id) {
  try {
    const responce = await fetchAxios(`movie/${id}`);
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит інформації про акторський склад для сторінки кінофільму по id
async function fetchCreditsMovieById(id) {
  try {
    const responce = await fetchAxios(`movie/${id}/credits`);
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит оглядів для сторінки кінофільму по id
async function fetchReviewsMovieById(id) {
  try {
    const responce = await fetchAxios(`movie/${id}/reviews`);
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит на пошук фільмів
async function fetchMovieByQuery(query) {
  try {
    const responce = await fetchAxios('search/movie', {
      params: { query, page: 1, include_adult: false },
    });
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

export {
  fetchTrendMovies,
  fetchMovieById,
  fetchMovieByQuery,
  fetchCreditsMovieById,
  fetchReviewsMovieById,
};
