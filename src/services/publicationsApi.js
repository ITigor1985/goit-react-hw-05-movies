import axios from 'axios';
const key = '051044c279aad319532da903b2292510';

export const getTrending = async () => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};
export const getSearch = async query => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1&language=en-US`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};
export const getMovieDetails = async movie_id => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};
export const getMovieCast = async movie_id => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${key}&language=en-US`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};
export const getMovieReviews = async movie_id => {
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${key}&language=en-US`;
  const response = await axios.get(`${axios.defaults.baseURL}`);
  return response.data;
};
