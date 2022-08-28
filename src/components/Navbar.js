import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'><h1>Stories</h1></Link>
            <Link to='/create'>Create a Story</Link>
            <Link to='/search'>Search a story</Link>
            <Link to='/stories/:id'>create a story</Link>
        </nav>
    </div>
  )
}

export default Navbar