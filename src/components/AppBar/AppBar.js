import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledAppBar } from './AppBar.styled'

const AppBar = () => {
  return (
    <StyledAppBar>
      <NavLink to="/goit-react-hw-05-movies/" className={({isActive}) => isActive ? "Active" : null}>HOME</NavLink>
      <NavLink to="movies" className={({isActive}) => isActive ? "Active" : null}>MOVIES</NavLink>
    </StyledAppBar>
  )
}

export default AppBar