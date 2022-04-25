import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMoviesById } from '../components/services/api';

const MoviesDitailPage = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [movieLocation, setMovieLOcation] = useState({});
  const navigate = useNavigate();
  const location = useLocation()

  const onBackHandle = () => {
    navigate(movieLocation)
  }

  useEffect(() => {
    if(location.state?.from) setMovieLOcation(location.state.from)
  }, [location.state])

  useEffect(() => {
    const fetchById = async () => {
      const movie = await fetchMoviesById(moviesId)
      setMovie(movie)
    }
    fetchById()
  }, [moviesId])

  return (
    <>
      {/* <Link to="/goit-react-hw-05-movies" style={{ marginBottom: 10, display: "block" }}> ⬅️ Go back </Link> */}
      <button onClick={onBackHandle}> ⬅️ Go back </button>
      <div style={{ display: "flex" }}>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} style={{ marginRight: 30 }} />
        <div>
          <h3>{movie.title}</h3>
          <p>User Score: {parseInt(movie.popularity)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Ganres</h3>
          <p>{(movie.genres)?.map(gen => gen.name).join(', ')}</p>
        </div>
      </div>
      <hr />
      <Suspense fallback={<div>Liading...</div>}>
        <div>
          <h3>Additional onfirmation</h3>
          <Link to="cast" style={{ marginRight: 15 }}>Casts</Link>
          <Link to="review">Revievs</Link>
        </div>
        <div style={{ margin: "15px 0" }} className="Casts">
          <Outlet />
        </div>
      </Suspense>
    </>
  )
}

export default MoviesDitailPage
