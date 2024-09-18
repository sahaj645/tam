import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>

      <Link to="/">Home </Link>
      <Link to="/register">CodeCortex</Link>
      <Link to="/SurvivalShowdown"> SurvivalShowdown</Link>

      
    </nav>
  )
}
