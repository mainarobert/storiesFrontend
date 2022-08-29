import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import './navbar.css'

function Navbar() {

  const { color } = useTheme()

  return (
    <div className='navbar' style={{ background: color }}>
        <nav>
            <Link to='/' className='brand'><h1>Stories</h1></Link>
            {/* <Link to='/create'>Create a Story</Link> */}
            <Link to='/search'>Search a story</Link>
            <Link to='/create'>create a story</Link>
        </nav>
    </div>
  )
}

export default Navbar