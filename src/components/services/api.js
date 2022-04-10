import axios from "axios";

export const fetchMovies = async () => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=2cf91cf1fed5026ae9524dc97ad33068`);
    return data.data.results
  } catch (error) {
   console.log('error', error) 
  }
}

export const fetchMoviesById = async (id) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2cf91cf1fed5026ae9524dc97ad33068`);
    return data.data
  } catch (error) {
    console.log('error', error)
  }
}

export const fetchReviewsById = async (id) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=2cf91cf1fed5026ae9524dc97ad33068`);
    return data.data.results
  } catch (error) {
    console.log('error', error)    
  }
}

export const fetchCastsById = async (id) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=2cf91cf1fed5026ae9524dc97ad33068`);
    return data.data
  } catch (error) {
    console.log('error', error)    
  }
}

export const fetchMoviesByQuery = async (query) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2cf91cf1fed5026ae9524dc97ad33068&query=${query}`);
    return data.data.results
  } catch (error) {
    console.log('error', error)    
  }
}

