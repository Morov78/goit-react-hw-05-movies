import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '092bcb29ccd47efc5792e9a4733d23fe';

const fetchAxios = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

const params = {
  api_key: API_KEY,
};

//Запит інформації про популярнці фільми за день
async function fetchTrendMovies() {
  try {
    const responce = await fetchAxios('trending/movie/day', {
      params: { ...params, page: 1 },
    });
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит інформації про фільм по id
// arg: "" або відсутній - запит повної інформації про фільм по id,
// "credits" - запит інформації про акторський склад для сторінки кінофільму по id
// "reviews" -запит оглядів для сторінки кінофільму по id
async function fetchMovieById(id, arg = '') {
  if (arg) {
    arg = '/' + arg;
  }
  try {
    const responce = await fetchAxios(`movie/${id}${arg}`, { params });
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

//запит на пошук фільмів
async function fetchSearchMovie(query) {
  try {
    const responce = await fetchAxios(`search/movie?query=${query}`, {
      params: { ...params, page: 1, include_adult: false },
    });
    return responce;
  } catch (error) {
    console.log(`Axios request failed ${error}`);
  }
}

export { fetchTrendMovies, fetchMovieById, fetchSearchMovie };
