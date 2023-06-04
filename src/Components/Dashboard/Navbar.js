import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='items'>
                <h1 className='logo'>Aloha</h1>
                <ul className='nav-items'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/highlights/Surfing'>Surfing</Link>
                    </li>
                    <li>
                        <Link to='/highlights/Hula'>Hula</Link>
                    </li>
                    <li>
                        <Link to='/highlights/Vulcano'>Volcano</Link>
                    </li>
                </ul>
            </div>
            <button>Book a trip</button>
        </div>
    )
}
