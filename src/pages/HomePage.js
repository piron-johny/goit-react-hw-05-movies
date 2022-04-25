import MovieList from 'components/MovieList'
import React, { Suspense, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchMovies } from '../components/services/api'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData)
    }
    fetchData()
  }, [])

  return (
    <Suspense fallback={<div>Liading...</div>}>
      <h1> Trending movies</h1>
      <MovieList to={'movies/'} location={location} movies={movies} />

    </Suspense>

  )
}

export default HomePage