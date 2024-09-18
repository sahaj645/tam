import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>

      <Link to="/">Home   </Link>
      <Link to="/">About   </Link>
      <Link to="/"> Events   </Link>
      
      <Link to="/Contact">Contact </Link>
      
      <Link to="/Navreg">Register </Link>
    </nav>
  )
}
