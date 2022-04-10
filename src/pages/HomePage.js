import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchMovies } from '../components/services/api'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData)
    }
    fetchData()
  }, [])

  return (
    <Suspense  fallback={<div>Liading...</div>}>
      <h1> Trending movies</h1>
      {movies.map(movie => (
        <ul key={movie.id}>
          <li>
            <Link to={`movies/${movie.id}`} >{movie.original_title}</Link>
          </li>
        </ul>
      ))}
    </Suspense>

  )
}

export default HomePage