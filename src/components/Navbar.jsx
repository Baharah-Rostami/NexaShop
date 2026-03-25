import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav style={{padding: 10 }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todo">List</NavLink>
            <NavLink to="/signUp">Contact</NavLink>
        </nav>
    </div>
  )
}
