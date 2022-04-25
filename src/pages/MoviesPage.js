import MovieList from 'components/MovieList';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../components/services/api';

const MoviesPage = () => {
  const { moviesId } = useParams();
  const [query, setQuery] = useState('')
  const [searchMovies, setSearchMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const HandleSubmit = async (e) => {
    e.preventDefault()
    setSearchParams({ query })
  }

  useEffect(() => {
    const queryParams = searchParams.get('query')
    if(queryParams){
      setQuery(queryParams)
      fetchMoviesByQuery(queryParams).then(res => setSearchMovies(res))
    }
  }, [searchParams])

  return (
    <>
      {!moviesId && <div>
        <div>Search movies</div>
        <form onSubmit={HandleSubmit}>
          <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
          <button type='submiy'>Send</button>
        </form>
        <MovieList to={''} movies={searchMovies} location={location} />
      </div>}
      <Suspense fallback={<div>Liading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default MoviesPage