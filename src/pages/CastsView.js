import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCastsById } from '../components/services/api'

const CastsView = () => {
  const [casts, setCasts] = useState({})
  const { moviesId } = useParams()

  useEffect(() => {
    const fechCasts = async () => {
      const castsData = await fetchCastsById(moviesId)
      setCasts(castsData.cast)
    }
    fechCasts()
  }, [moviesId])

  return (
    <>
      {!!casts?.length && (casts)?.map(cast => (
        <ul key={cast.id}>
          <li className='Casts__item'>
            <img
              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
              alt={cast.name}
              width="70"
              height="100" />
            <div style={{ marginLeft: 15 }}>
              <p>Name: {cast.name}</p>
              <p>Character: {cast.character}</p>
            </div>
          </li>
        </ul>)
      )}
    </>
  )
}

export default CastsView