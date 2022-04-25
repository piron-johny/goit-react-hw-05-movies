import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ location, movies, to }) => {
  return (
    <ul>
      {movies?.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`${to}${id}`} state={{ from: location }} >{original_title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default MovieList;
