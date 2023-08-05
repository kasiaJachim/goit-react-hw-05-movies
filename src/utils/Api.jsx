import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0fd779472876e4af22673aa006824d25',
  },
});

export const getTrending = async () => {
  try {
    const { data } = await instance.get('/trending/movie/day', {});
    return data.results;
  } catch (error) {
    toast.warning('OOPS');
    return error.message;
  }
};
export const fetchByQuery = async query => {
  try {
    const { data } = await instance.get(`/search/movie`, {
      params: { language: 'en-US', page: 1, include_adult: false, query },
    });
    console.log(data.results);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}`, {
      params: { language: 'en-US' },
    });
    return data;
  
  } catch (error) {
    return error.message;
    
  }
};
export const fetchMovieReviews = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}/reviews`, {
      params: { language: 'en-US' },
    });
    return data.results;
  } catch (error) {
    return error.message;
  }
};
export const fetchMovieCredits = async id => {
  try {
    const { data } = await instance.get(`/movie/${id}/credits`, {
      params: { language: 'en-US' },
    });
    return data.cast;
  } catch (error) {
    return error.message;
  }
};
