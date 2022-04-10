import { Suspense, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../components/services/api';

const MoviesPage = () => {
  const navigate = useNavigate();
  const { moviesId } = useParams();
  const [value, setValue] = useState('')
  const [searchMovies, setSearchMovies] = useState([])

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const searchData = await fetchMoviesByQuery(value)
    setSearchMovies(searchData)
    navigate(`?query=${value}`)
  }

  return (
    <>
      {!moviesId && <div>
        <div>Search movies</div>
        <form onSubmit={HandleSubmit}>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
          <button type='submiy'>Send</button>
        </form>

        {searchMovies.map(movie => (
          <ul key={movie.id}>
            <li>
              <Link to={`${movie.id}`} >{movie.original_title}</Link>
            </li>
          </ul>
        ))}

      </div>}
      <Suspense fallback={<div>Liading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MoviesPage