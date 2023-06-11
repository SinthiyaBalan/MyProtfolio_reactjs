import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <ul className='nav-links'>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/projects">My Work</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
            <li>
              <Link to = "/myresume">My Resume</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default Nav