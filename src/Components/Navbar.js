import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <ul>
      <NavLink to="/welcome">
        <li>Welcome</li>
      </NavLink>
      <NavLink to="/instructors">
        <li>Instructors</li>
      </NavLink>
      <NavLink to="/anime">
        <li>Anime</li>
      </NavLink>
      <NavLink to="/instructors">
        <li>Add Instructor</li>
      </NavLink>
    </ul>
  )
}

export default NavBar