import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <h3>Sheriyans</h3>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product15</Link>
            </div>
        </div>
    )
}

export default Navbar